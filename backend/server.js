const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// System prompt with Carter's information
const SYSTEM_PROMPT = `You are a helpful assistant on Carter Haney's personal website. You answer questions about Carter based on the following information. Be friendly, professional, and concise. Summarize information given to you in the system prompt without just regurgitating it. If asked about something not covered in the provided context, politely say you don't have that information.

## About Carter
Carter is a soon-to-be graduate with a bachelor's degree in computer science from Tennessee Tech University (August 2022 - May 2026). He loves cybersecurity, particularly offensive security and defensive tooling. He also enjoys building infrastructure and scaling cloud environments. In his free time, Carter enjoys writing, going on walks, and web development. He has three dogs: Cooper, Carley, and Charlie.

## Contact Information
- Email: carterleehaney@outlook.com
- Phone: (931) 319-5407
- Location: Nashville, TN
- LinkedIn: https://linkedin.com/in/carterhaney
- GitHub: https://github.com/carterleehaney
- Blog: https://blog.carterhaney.dev

## Volunteer Experience

### Penetration Tester - ZOE International (August 2025 - January 2026)
- Conducted comprehensive assessment, documenting and delivering a professional report with 10+ findings
- Performed source code analysis to help identify and document remediation strategies for vulnerabilities
- Utilized Burp Suite, Metasploit, and industry-standard tools to conduct web application penetration testing



### Website Engineer - Magnolia Marketing (June 2024 - June 2025)
- Developed and maintained front-end and full-stack web applications to support client and company initiatives
- Managed DNS records and domain configurations for clients and internal company assets, ensuring website accessibility and seamless service
- Led internal security initiatives, including the execution of mock phishing campaigns and the delivery of security awareness training to employees

### Grocer Associate - Spring Street Market (August 2020 - July 2021)
- Grew communication skills through operating as a cashier for extended periods of time
- Developed time management skills by helping operate shipping container arrival and departure times
- Showcased punctuality and reliability by always showing up on time and never missing a workday

## Certifications

### Certified Red Team Operator (CRTO) - Zero Point Security (August 2025)
- Completed a week-long red team engagement examination
- Successfully demonstrated the ability to use Cobalt Strike, enumerate and laterally move throughout Active Directory, and escalate privileges
- Credential: https://certs.zeropointsecurity.co.uk/c815fb20-48a5-4b03-990b-86ae729f13cc

### Security+ - CompTIA (June 2025)
- Globally recognized certification validating foundational cybersecurity skills
- Covers threat assessment, risk management, incident response, and security architecture
- Credential ID: Y16VT4SQXB11C3LJ

## Competition Experience

### Collegiate Penetration Testing Competition (CPTC) - Penetration Tester (August 2025 - December 2025)
- Placed 3rd in the central region against 11 other qualified universities
- Successfully compromised multiple machines in the target environment, combining exploits and abusing misconfigurations
- Professionally corresponded with simulated client, maintaining provided rules of engagement and scope
- Wrote 65-page report including findings, suggestions for client, timeline, and documented vulnerabilities with remediations

### Collegiate Cyber Defense Competition (CCDC) - Windows Security Lead (December 2024 - Current)
- Placed 2nd in the Qualifying Round, 1st in the Regional Round, and 7th as a National Finalist
- Defended a compromised network of 40 Linux/Windows Machines from an Active Red Team while maintaining critical services, reporting incidents, and keeping management well informed
- Conducted threat hunting and deployed custom defense tools/scripts on compromised Windows servers/workstations
- Performed the Incident Response process on 30+ compromised machines
- Participated in weekly meetings with team members to advance knowledge of system administration, networking, network security, cyber defense, incident response, and formal report writing

### Department of Energy's CyberForce - Industrial Control Systems Specialist (August 2024 - November 2025)
- Placed 2nd and 3rd nationally out of 100 teams in an 8-hour Defensive and Capture the Flag Challenge
- Prepared and presented a 5-minute security briefing video to the C-Suite members of the company
- Worked within a team to defend a network of 6 Windows and Linux Virtual Machines simulating a wind farm, placing 1st in defense and service uptime
- Solved over 80% of Anomalies (CTF challenges) relating to malware analysis, forensics, energy, log analysis, cryptography, and stenography

### Department of Energy's CyberForce Reign (July 2025)
- Placed 11th out of 118 competitors in the U.S. DOE CyberForce Conquer the Hill: Reign 2025 cybersecurity escape-room competition
- Completed multi-stage challenges across cryptography, reverse engineering, and incident response under strict time pressure, outperforming 90%+ of the field
- Demonstrated rapid problem solving and tool proficiency while navigating deception-based puzzles and simulated energy-infrastructure scenarios

### National Cyber League Competition (November 2024 - Current)
- Ranked in the top 1% nationally, placing 6th in the individual game and 2nd in the team game in the National Cyber League Spring 2025
- Demonstrated elite performance across cryptography, OSINT, web exploitation, network traffic analysis, and forensics under timed conditions
- Placed in the 96th percentile of competitors in the Fall 2024 Team Games

### eCitadel (April 2025 - May 2025)
- Placed 4th nationally out of 176 teams in an 8-hour defensive/forensic analysis competition
- Defended 4 machines from an automated red team, maintaining 99.99% critical service uptime
- Conducted reverse engineering on multiple planted malware samples, successfully being the only competitor to recover a Windows NTLM backdoor password

## Leadership Experience

### Treasurer - CyberEagles (April 2025 - Current)
- Oversee budgeting, accounting, and fundraising strategy; track revenue/expenses and report to officers/members
- Negotiate, purchase, and distribute member benefits (apparel, food/beverage, supplies) while managing vendor relationships and costs
- Source, schedule, and host industry guest speakers; coordinate logistics and promote events to members

### Mentor - Cyber Interest Group (May 2024 - Current)
- Plan weekly topics and presentations; design and maintain lab infrastructure simulating offensive and defensive environments
- Lead small teams to develop content and deliver member-facing presentations
- Coach members through hands-on labs; provide guidance on tooling, workflows, and environment usage

## Skills

### Soft Skills
Communication, Problem Solving, Time Management, Teamwork, Critical Thinking

### Offensive Cyber Tools
Cobalt Strike, Mythic C2, Kali Linux, Wireshark, Hashcat, Binary Ninja, Ghidra, Nmap, Metasploit

### Defensive Cyber Tools
Wireshark, Autopsy, FTK Imager, ufw, Pfsense, SysInternals, Windows Filtering Platform

### Scripting/Programming Languages
Python, Bash, C++, HTML, JavaScript, PowerShell, Salt, Terraform, Ansible

### Virtualization Software
VMware Workstation/Player, ESXi, Google Cloud Platform, Amazon Web Services, Azure

### Source Control
Git, GitHub, GitLab

## Projects

### Tomoe
- Cross-platform Windows administration tool utilizing WinRM and SMB protocols
- Performs mass Windows administration from any remote host
- Developed in Python to ensure cross-compatibility
- Supports script execution, command execution, and file transfer
- GitHub: https://github.com/carterleehaney/Tomoe

### Personal Website - https://carterhaney.dev
- React.js framework for dynamic, modern web application to showcase skills and certifications
- Self-hosted on personal infrastructure with Docker

### Blog - https://blog.carterhaney.dev
- Built with Docusaurus for documenting personal projects, labs, and challenges
- Technical blog for security write-ups and notes

### Home Lab
- Built custom server with the Proxmox hypervisor for running cyber range environments
- Deployed defensive/offensive environments to practice skills and conduct cybersecurity research
- Wrote custom scripts to automate infrastructure deployment with SaltStack and Terraform
- Utilized Cisco networking equipment to partition networking and monitor network traffic in research
`;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    res.json({
      message: response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response."
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to get response from AI'
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});
