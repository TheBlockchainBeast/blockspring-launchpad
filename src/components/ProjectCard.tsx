import React, { useState, useEffect } from "react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    status: string;
    currentFunding: number;
    fundingGoal: number;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    if (project.status === "Completed") {
      setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      return;
    }

    // Example launch date - replace with actual project launch date
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 2); // Setting 2 days from now for demo

    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [project.status]);

  return (
    <div
      className="relative bg-white dark:bg-[#0A0A0A] rounded-[0.5rem] p-6 
      before:absolute before:inset-0 before:rounded-[0.5rem] before:p-[1px] 
      before:bg-gradient-to-r before:from-purple-500/20 before:via-transparent before:to-blue-500/20 
      before:-z-10 hover:before:opacity-100 before:opacity-50 transition-all duration-300
      shadow-lg shadow-purple-500/5 dark:shadow-purple-500/10
      hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20
      backdrop-blur-sm"
    >
      {/* Header section */}
      <div className="flex items-start justify-between">
        <div>
          {/* Logo container with improved styling */}
          <div
            className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-50/90 to-gray-50/70 
            dark:from-[#1C1C1C]/90 dark:to-[#1C1C1C]/70 backdrop-blur-sm 
            flex items-center justify-center mb-4 
            shadow-inner shadow-purple-500/5"
          >
            {/* Updated logo placeholder with animation */}
            <div
              className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
              hover:from-purple-500 hover:to-blue-500 transition-all duration-500 
              shadow-lg shadow-purple-500/20"
            />
          </div>

          <h2
            className="text-lg font-semibold text-gray-900 dark:text-white 
            bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 
            bg-clip-text text-transparent"
          >
            {project.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {project.description}
          </p>
        </div>

        {/* Social icons */}
        <div className="flex gap-2">{/* Add social icons as needed */}</div>
      </div>

      {/* Launch info with improved styling */}
      <div className="mt-6 flex items-center justify-between">
        <div
          className="bg-gradient-to-r from-gray-50 to-transparent dark:from-[#1C1C1C] dark:to-transparent 
          p-3 rounded-2xl"
        >
          <div className="text-sm text-gray-500">Launch {project.status}</div>
          <div className="flex items-center gap-2 mt-1 text-sm font-medium">
            <span className="text-purple-600 dark:text-purple-400">
              {timeLeft.days}d
            </span>
            <span className="text-gray-300">·</span>
            <span className="text-blue-600 dark:text-blue-400">
              {timeLeft.hours}h
            </span>
            <span className="text-gray-300">·</span>
            <span className="text-indigo-600 dark:text-indigo-400">
              {timeLeft.minutes}m
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
