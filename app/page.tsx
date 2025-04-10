"use client";

import {Header} from "@/app/components/Header";
import React, {useState} from "react";
import ProjectCard from "@/app/components/Project-Section/ProjectCard";
import {projectData} from "@/app/components/Project-Section/projects";
import ProjectsSection from "@/app/components/Project-Section/ProjectSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (projectIndex: number) => {
    setSelectedProject(projectIndex);
  };

  return (
    <div className="relative bg-white">
      <Header/>
      <main className="pt-[80px] bg-white">
        <section id="about" className="h-screen flex flex-col justify-center items-center snap-start bg-white">
          <p className="text-xl text-gray-700 max-w-2xl text-center mb-4">
            <span className={"font-bold"}> Hello, I'm Nedim</span>. <br/>
            As a{" "}
            <span
              className="relative text-6xl font-extrabold text-gray-900 uppercase tracking-widest transform skew-x-6
              animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900">
              Frontend Developer
            </span>
            , I specialize in creating clean, efficient, and scalable web applications. I am dedicated to delivering
            intuitive user experiences and building solutions that drive impactful results.
          </p>
          <button
            className="inline-block px-6 mt-5 py-3 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 text-white
            rounded-md hover:bg-gray-800 transition">
            <a href="/cv.pdf" download>
              Download CV
            </a>
          </button>
        </section>
        <section id='projects' className={"flex flex-row justify-center"}>
          <ProjectsSection projects={projectData}/>
        </section>
        <section id="contact" className="h-screen flex flex-col justify-center items-center snap-start bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-lg text-gray-700 text-center mb-4">
            If you’d like to work together or just want to chat, feel free to reach out!
          </p>
          <a href="mailto:youremail@example.com"
             className="inline-block px-6 py-3 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 text-white rounded-md hover:bg-gray-800 transition">
            Send an Email
          </a>
        </section>
      </main>
    </div>
  );
}
