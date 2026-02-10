const portfolioData = {
    personal: {
        name: "Ankur Bansal",
        title: "Salesforce Marketing Cloud Solution Architect",
        location: "Gurugram, Haryana 122004",
        email: "bansalankur2017@gmail.com",
        phone: "+(91) 8527558804",
        summary: "Results-driven Salesforce Marketing Cloud Solution Architect with 11+ years of experience driving digital transformation across BFSI, Pharma, Automobile, Healthcare, Non-Profit and Retail domains. Expert in architecting and implementing end-to-end Salesforce Marketing Cloud (SFMC) solutions that deliver scalable, data-driven, and personalized customer experiences.",
        stats: [
            { value: "11+", label: "Years Experience" },
            { value: "6+", label: "Industries Served" },
            { value: "8", label: "Salesforce Certs" },
            { value: "4", label: "Companies" }
        ]
    },
    
    experience: [
        {
            id: 1,
            company: "Nagarro",
            title: "Marketing Cloud Solutions Architect",
            location: "Gurugram, India",
            period: "2021 - Present",
            current: true,
            points: [
                "Analyzed and translated business requirements into tailored technical solutions for BFSI, Pharma, and Retail clients",
                "Designed solutions for triggering email/SMS communications using Marketing Cloud APIs",
                "Managed customer journey development and configuration for improved brand engagement",
                "Utilized Marketing Cloud Personalization to create real-time 1-to-1 web experiences",
                "Engineered solutions using Interaction Studio's Einstein decisioning engine for real-time personalization",
                "Developed custom automation workflows using SSJS, APIs, automations, and cloud pages"
            ]
        },
        {
            id: 2,
            company: "Publicis Sapient",
            title: "Senior Associate Platform L1",
            location: "",
            period: "2019 - 2021",
            current: false,
            points: [
                "Analysis and modeling of processes, architectures, and data structures for Automobile, Energy & Commodities, and E-commerce",
                "Oversight of integrations and data migrations to Salesforce Marketing Cloud",
                "Implementation of SFMC campaigns including data configuration and audience segmentation",
                "Facilitation of end-to-end marketing automation workflows",
                "Collaboration with cross-functional teams for industry-specific optimizations"
            ]
        },
        {
            id: 3,
            company: "United Health Group",
            title: "Application Developer",
            location: "",
            period: "2017 - 2019",
            current: false,
            points: [
                "Developed end-to-end user stories including grooming, design, coding, and deployment",
                "Designed robust solutions for US Healthcare Insurance sector",
                "Monitored application performance using Dynatrace and Splunk logs",
                "Resolved production defects promptly to minimize downtime",
                "Maintained system stability through proactive issue detection"
            ]
        },
        {
            id: 4,
            company: "HCL Technologies Ltd",
            title: "Software Engineer",
            location: "",
            period: "2014 - 2017",
            current: false,
            points: [
                "Development and deployment of features for eCommerce and digital payment platforms",
                "Implemented bug fixes to improve system reliability",
                "Created dashboards for team performance and platform health insights",
                "Generated system health reports for stakeholder communication",
                "Full Stack Developer across multiple project phases"
            ]
        }
    ],
    
    skills: [
        {
            category: "Salesforce Marketing Cloud",
            icon: "☁️",
            items: ["Email Studio", "Automation Studio", "Mobile Connect", "Journey Builder", "Content Builder", "MC Personalization", "Data Cloud", "Marketing Cloud Next"]
        },
        {
            category: "Programming & Scripting",
            icon: "💻",
            items: ["JavaScript", "SSJS", "Node.js", "Apex", "Core Java", "Spring MVC", "Spring Boot", "AMPscript"]
        },
        {
            category: "Web Development",
            icon: "🎨",
            items: ["HTML", "CSS", "Bootstrap", "Lightning Web Components", "AJAX", "jQuery"]
        },
        {
            category: "Integration & APIs",
            icon: "🔌",
            items: ["REST APIs", "SOAP APIs", "Web Services", "Real-time Integration"]
        },
        {
            category: "Database & Tools",
            icon: "🗄️",
            items: ["MySQL", "Advanced SQL", "GitHub", "Splunk", "Dynatrace"]
        },
        {
            category: "Architecture",
            icon: "🏗️",
            items: ["Solution Design", "Pre-sales", "RFP Processes", "MarTech Architecture", "ROI Optimization"]
        }
    ],
    
    certifications: [
        { name: "Salesforce Marketing Cloud Email Specialist", issuer: "Salesforce", year: "" },
        { name: "Salesforce Certified Marketing Cloud Administrator", issuer: "Salesforce", year: "" },
        { name: "Salesforce Certified Marketing Cloud Consultant", issuer: "Salesforce", year: "" },
        { name: "Salesforce Certified Marketing Cloud Developer", issuer: "Salesforce", year: "" },
        { name: "Salesforce Certified Data Cloud Consultant", issuer: "Salesforce", year: "" },
        { name: "Salesforce Certified JavaScript Developer I", issuer: "Salesforce", year: "" },
        { name: "Salesforce Certified Platform Developer I", issuer: "Salesforce", year: "" },
        { name: "Salesforce Marketing Cloud Personalization Accredited Professional", issuer: "Salesforce", year: "" }
    ],
    
    awards: [
        { title: "Nagarro Brightest Mind Award", org: "Nagarro", year: "", icon: "🏆" },
        { title: "Sapient Client Impact Award", org: "Publicis Sapient", year: "2020", icon: "🎯" },
        { title: "OGS Star Award", org: "United Health Group", year: "", desc: "Excellent performance during the quarter", icon: "⭐" },
        { title: "OGS Diamond Award", org: "United Health Group", year: "", desc: "Continuous valuable efforts and collaboration", icon: "💎" },
        { title: "OGS Opal Recognition", org: "United Health Group", year: "", desc: "Delivery excellence", icon: "🔷" },
        { title: "OGS Sapphire Recognition", org: "United Health Group", year: "", desc: "Application reliability and maintenance", icon: "💠" },
        { title: "Outstanding Contribution Award", org: "HCL Technologies", year: "", desc: "Developing tools for Production Support", icon: "🛠️" },
        { title: "Live Wire Award", org: "HCL Technologies", year: "", desc: "Excellent performance", icon: "⚡" }
    ],
    
    contact: [
        { type: "Email", value: "bansalankur2017@gmail.com", href: "mailto:bansalankur2017@gmail.com", icon: "✉️" },
        { type: "Phone", value: "+(91) 8527558804", href: "tel:+918527558804", icon: "📱" },
        { type: "Location", value: "Gurugram, Haryana, India", href: "#", icon: "📍" },
        { type: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com", icon: "💼" }
    ]
};