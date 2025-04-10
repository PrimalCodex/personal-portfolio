"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, onClick}) => {
  return (
    <div
      className="cursor-pointer shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-105
      bg-gray-400"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full max-h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-900 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
