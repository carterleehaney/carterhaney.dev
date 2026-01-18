import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './Chat.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function Chat() {
	const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: "Hi! I'm Carter's AI assistant. Feel free to ask me anything about Carter's background, projects, certifications, or skills!"
		}
	]);
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const messagesEndRef = useRef(null);
	const inputRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const sendMessage = async (e) => {
		e.preventDefault();
		if (!input.trim() || isLoading) return;

		const userMessage = { role: 'user', content: input.trim() };
		setMessages(prev => [...prev, userMessage]);
		setInput('');
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					messages: [
						...messages.slice(1).map(m => ({ role: m.role, content: m.content })),
						{ role: 'user', content: userMessage.content }
					]
				})
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.error || `API error: ${response.status}`);
			}

			const data = await response.json();
			const assistantMessage = {
				role: 'assistant',
				content: data.message || "I'm sorry, I couldn't generate a response."
			};

			setMessages(prev => [...prev, assistantMessage]);
		} catch (err) {
			setError(err.message);
			setMessages(prev => [...prev, {
				role: 'assistant',
				content: "I'm having trouble connecting right now. Please try again later."
			}]);
		} finally {
			setIsLoading(false);
			inputRef.current?.focus();
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage(e);
		}
	};

	return (
		<div className="chat-page">
			<NavBar />
			<section className="chat-section">
				<div className="chat-content">
					<h1 className="chat-title">/chat</h1>
					<p className="chat-intro">
						Ask anything about my background, projects, certifications, or skills.
					</p>

					<div className="chat-container">
						<div className="messages-container">
							{messages.map((message, index) => (
								<div
									key={index}
									className={`message ${message.role}`}
								>
									<div className="message-label">
										{message.role === 'user' ? 'You' : 'Assistant'}
									</div>
									<div className="message-content markdown-content">
									<ReactMarkdown
										components={{
											a: ({ href, children }) => (
												<a href={href} target="_blank" rel="noopener noreferrer">
													{children}
												</a>
											)
										}}
									>
										{message.content}
									</ReactMarkdown>
								</div>
								</div>
							))}
							{isLoading && (
								<div className="message assistant">
									<div className="message-label">Assistant</div>
									<div className="message-content loading">
										<span className="typing-indicator">
											<span></span>
											<span></span>
											<span></span>
										</span>
									</div>
								</div>
							)}
							<div ref={messagesEndRef} />
						</div>

						{error && (
							<div className="error-message">
								{error}
							</div>
						)}

						<form onSubmit={sendMessage} className="input-container">
							<input
								ref={inputRef}
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyDown}
								placeholder="Type your message..."
								disabled={isLoading}
								className="chat-input"
								autoFocus
							/>
							<button
								type="submit"
								disabled={isLoading || !input.trim()}
								className="send-button"
							>
								{isLoading ? '...' : 'Send'}
							</button>
						</form>
					</div>

					<p className="chat-footnote">
						Powered by GPT-4o-mini. Responses may be inaccurate or incomplete. Please verify any important information.
					</p>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Chat;
