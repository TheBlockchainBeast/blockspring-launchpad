import React, { useState } from "react";
import { mockProjects } from "@/data/mockProjects";

interface ProjectDetailsProps {
  id: string;
}

export default function ProjectDetails({ id }: ProjectDetailsProps) {
  const project = mockProjects.find((p) => p.id === id) || mockProjects[0];
  const [contributionAmount, setContributionAmount] = useState("");

  const handleContribute = () => {
    // Implement contribution logic
    console.log("Contributing:", contributionAmount);
  };

  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-6 space-y-4 sm:space-y-8">
      {/* Project Overview Section */}
      <div
        className="bg-white dark:bg-[#0A0A0A] rounded-[0.5rem] p-4 sm:p-6 
        relative before:absolute before:inset-0 before:rounded-[0.5rem] 
        before:p-[1px] before:bg-gradient-to-r before:from-purple-500/20 
        before:via-transparent before:to-blue-500/20 before:-z-10"
      >
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Logo */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500" />

          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
              <h1
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              >
                {project.title}
              </h1>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  project.status === "In Progress"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </div>

        {/* Funding Progress */}
        <div className="mt-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500 dark:text-gray-400">
              ${project.currentFunding.toLocaleString()} raised
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              ${project.fundingGoal.toLocaleString()} goal
            </span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              style={{
                width: `${Math.min(
                  (project.currentFunding / project.fundingGoal) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="bg-white dark:bg-[#0A0A0A] rounded-[0.5rem] p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-4">Project Milestones</h2>
        <div className="space-y-4">
          {project.milestones?.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 
              border border-gray-100 dark:border-gray-800 rounded-lg"
            >
              <span className="text-gray-800 dark:text-gray-200">
                {milestone.name}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  milestone.status === "verified"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                }`}
              >
                {milestone.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution Section */}
      <div className="bg-white dark:bg-[#0A0A0A] rounded-[0.5rem] p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-4">Contribute</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <input
            type="number"
            value={contributionAmount}
            onChange={(e) => setContributionAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-200 
              dark:border-gray-800 bg-transparent"
          />
          <button
            onClick={handleContribute}
            className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 
              text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
}
