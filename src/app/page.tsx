"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";

export default function Home() {
  const [status, setStatus] = useState("");
  // Mock data - replace with actual data later
  const projects = [
    {
      id: "1",
      title: "Project Alpha",
      description:
        "Gen DeFi protocol for institutional clients.\nEnabling seamless transactions and yield optimization.",
      status: "In Progress",
      currentFunding: 150000,
      fundingGoal: 200000,
    },
    {
      id: "2",
      title: "EcoChain",
      description:
        "Blockchain system for environmental tracking.\nMonitors emissions and validates sustainability.",
      status: "Completed",
      currentFunding: 500000,
      fundingGoal: 500000,
    },
    {
      id: "3",
      title: "MetaVerse Hub",
      description:
        "Virtual reality social ecosystem for users.\nFeatures interactive experiences and digital commerce.",
      status: "In Progress",
      currentFunding: 750000,
      fundingGoal: 2000000,
    },
    {
      id: "4",
      title: "DeFi Lending Protocol",
      description:
        "P2P lending platform with smart contracts.\nProvides transparent and efficient financial services.",
      status: "In Progress",
      currentFunding: 300000,
      fundingGoal: 1000000,
    },
    {
      id: "5",
      title: "NFT Marketplace",
      description:
        "Premium platform for digital collectibles.\nFeatures curated artwork and integrated royalties.",
      status: "Completed",
      currentFunding: 400000,
      fundingGoal: 400000,
    },
    {
      id: "6",
      title: "Smart City DAO",
      description:
        "Community-driven urban development system.\nImplements blockchain governance for infrastructure.",
      status: "In Progress",
      currentFunding: 1200000,
      fundingGoal: 5000000,
    },
    {
      id: "7",
      title: "GameFi Platform",
      description:
        "Blockchain gaming ecosystem with rewards.\nEnables cross-game trading and asset ownership.",
      status: "In Progress",
      currentFunding: 800000,
      fundingGoal: 1500000,
    },
    {
      id: "8",
      title: "Cross-Chain Bridge",
      description:
        "Multi-blockchain transfer solution.\nProvides secure bridging across major networks.",
      status: "Completed",
      currentFunding: 3000000,
      fundingGoal: 3000000,
    },
    {
      id: "9",
      title: "DeSci Research",
      description:
        "Blockchain platform for scientific funding.\nFacilitates peer-reviewed research proposals.",
      status: "In Progress",
      currentFunding: 250000,
      fundingGoal: 1000000,
    },
    {
      id: "10",
      title: "Web3 Social",
      description:
        "Decentralized social media platform.\nFeatures content monetization and data ownership.",
      status: "In Progress",
      currentFunding: 450000,
      fundingGoal: 800000,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (!status) return true;
    return status === "completed"
      ? project.status === "Completed"
      : project.status === "In Progress";
  });

  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="container mx-auto px-4 py-8 mt-16">
        <SearchBar status={status} onStatusChange={setStatus} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
