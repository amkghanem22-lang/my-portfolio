export interface Accreditation {
	name: string;
	issuer: string;
	date: string;
	detail?: string;
}

export const professionalCertifications: Accreditation[] = [
	{
		name: 'Certified Anti-Money Laundering Specialist (CAMLS)',
		issuer: 'Financial Regulatory Authority (FRA)',
		date: 'Nov 2025',
		detail: 'Includes FSI certification',
	},
	{
		name: 'Professional Scrum Product Owner™ I (PSPO I)',
		issuer: 'Scrum.org',
		date: 'Mar 2025',
		detail: 'Scrum, Agile Methodologies',
	},
	{
		name: 'AI for Product Management',
		issuer: 'Pendo.io',
		date: 'Nov 2023',
		detail: 'Product Lifecycle Management, Product Management +3',
	},
	{
		name: 'Generative AI Overview for Project Managers',
		issuer: 'Project Management Institute (PMI)',
		date: 'Sep 2023',
		detail: 'Product Management, Project Management +2',
	},
	{
		name: 'Product-led Certification',
		issuer: 'Pendo.io',
		date: 'Mar 2023',
		detail: 'Product Management',
	},
	{
		name: 'Jira Fundamentals Badge',
		issuer: 'Atlassian',
		date: 'Oct 2022',
		detail: 'Credential ID 228901622 — Jira Software, Project Mgmt Software',
	},
	{
		name: 'Project Management Professional (PMP)',
		issuer: 'Engineering Tracks',
		date: 'May 2022',
		detail: 'Project Management, Agile Methodologies',
	},
];

export const coursesAndTraining: Accreditation[] = [
	{ name: 'Business Analysis for Financial Institutions', issuer: 'almentor', date: 'Jun 2025' },
	{ name: 'Product Growth Strategy', issuer: 'almentor', date: 'Jun 2025' },
	{
		name: 'Digital Financial Inclusion — Leveraging Technology for Greater Access',
		issuer: 'almentor',
		date: 'Jun 2025',
	},
	{ name: 'AI Prompt Engineering Frameworks', issuer: 'almentor', date: 'Jun 2025' },
	{ name: 'Product Management 101', issuer: 'Ready Talent', date: 'Aug 2025' },
	{ name: 'Business Analysis Course', issuer: 'Business Analysis Community', date: 'Aug 2023' },
	{ name: 'Product Design', issuer: 'Udacity', date: 'Oct 2023' },
	{ name: 'Professional Scrum Master Course', issuer: 'SwiftX LLC', date: 'Sep 2022' },
	{ name: 'CPIM Part 1', issuer: 'Supply Chain Society (SCS)', date: 'Feb 2022' },
	{ name: 'KNX Basic Course', issuer: 'KNX Association', date: 'Sep 2021' },
	{
		name: 'Supply Chain Management Diploma',
		issuer: 'American Academy for Training Courses',
		date: 'Jan 2021',
	},
	{ name: 'Operations and Supply Chain Management', issuer: 'Udemy', date: 'Apr 2020' },
	{ name: 'MATLAB/SIMULINK Bible: Go From Zero to Hero!', issuer: 'Udemy', date: 'Apr 2020' },
	{
		name: 'English Language and Activity Course',
		issuer: 'Berkshire Training Services Limited',
		date: 'Jun 2014',
	},
];
