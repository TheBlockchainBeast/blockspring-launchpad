"use client";

import { Header } from "@/components/Header";
import ProjectDetails from "@/app/detailspage";
import { use } from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params using React's `use()`
  const { id } = use(params);

  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="mt-16">
        <ProjectDetails id={id} />
      </div>
    </main>
  );
}
