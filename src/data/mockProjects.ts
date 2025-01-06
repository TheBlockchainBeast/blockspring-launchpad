export interface Project {
    id: string;
    title: string;
    description: string;
    status: "In Progress" | "Completed";
    currentFunding: number;
    fundingGoal: number;
    milestones?: {
        name: string;
        status: "verified" | "pending";
    }[];
}

export const mockProjects: Project[] = [
    {
        id: "1",
        title: "Project Alpha",
        description: "Gen DeFi protocol for institutional clients.\nEnabling seamless transactions and yield optimization.",
        status: "In Progress",
        currentFunding: 150000,
        fundingGoal: 200000,
        milestones: [
            { name: "Initial Development", status: "verified" },
            { name: "Beta Launch", status: "pending" },
            { name: "Mainnet Release", status: "pending" },
        ],
    },
    {
        id: "2",
        title: "EcoChain",
        description: "Blockchain system for environmental tracking.\nMonitors emissions and validates sustainability.",
        status: "Completed",
        currentFunding: 500000,
        fundingGoal: 500000,
        milestones: [
            { name: "Platform Development", status: "verified" },
            { name: "Pilot Program", status: "verified" },
            { name: "Full Deployment", status: "verified" },
        ],
    },
    {
        id: "9",
        title: "DeSci Research",
        description: "Blockchain platform for scientific funding.\nFacilitates peer-reviewed research proposals.",
        status: "In Progress",
        currentFunding: 250000,
        fundingGoal: 1000000,
        milestones: [
            { name: "Platform Architecture", status: "verified" },
            { name: "Peer Review System", status: "pending" },
            { name: "Grant Distribution", status: "pending" },
        ],
    },
    {
        id: "10",
        title: "Web3 Social",
        description: "Decentralized social media platform.\nFeatures content monetization and data ownership.",
        status: "In Progress",
        currentFunding: 450000,
        fundingGoal: 800000,
        milestones: [
            { name: "Core Features", status: "verified" },
            { name: "Content System", status: "pending" },
            { name: "Monetization Tools", status: "pending" },
        ],
    },
]; 