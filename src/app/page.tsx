"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";
import { mockProjects } from "@/data/mockProjects";

export default function Home() {
  const [status, setStatus] = useState("");

  const filteredProjects = mockProjects.filter((project) => {
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
