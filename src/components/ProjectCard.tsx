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
  return (
    <div className="bg-white dark:bg-[#0A0A0A] rounded-3xl p-6">
      {/* Header section */}
      <div className="flex items-start justify-between">
        <div>
          {/* Logo container */}
          <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#1C1C1C] flex items-center justify-center mb-4">
            {/* Placeholder for project logo - you can replace this with an actual image */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>

          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {project.description}
          </p>
        </div>

        {/* Social icons */}
        <div className="flex gap-2">{/* Add social icons as needed */}</div>
      </div>

      {/* Launch info and explore button */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Launch {project.status}</div>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <span>2d</span>
            <span>·</span>
            <span>15h</span>
            <span>·</span>
            <span>26m</span>
          </div>
        </div>

        <button className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-[#1C1C1C] rounded-xl hover:bg-gray-100 dark:hover:bg-[#2C2C2C] transition-colors">
          Explore →
        </button>
      </div>
    </div>
  );
}
