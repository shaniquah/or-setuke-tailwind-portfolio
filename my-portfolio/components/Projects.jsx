"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Web Calendar App",
    image: "/images/projects/calendar-thumb.png",
    description:
      "A web calendar application that automatically calculates the current month and day and displays all dates in a grid format.",
    technologies:
      "HTML(16.6%), CSS(20.5%), and JavaScript(62.9%) using Visual Studio Code IDE and Google Chrome web browser.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaniquah/IWA17.git",
    previewUrl: "https://web-calendar-app-orsetuke.netlify.app/",
  },
  {
    id: 2,
    title: "Events Web App",
    image: "/images/projects/events-thumb.png",
    description:
      "An app designed to serve as an example of building a dynamic events web application with Next.js and React.js. Users can explore events and interact with event details.",
    technologies:
      "JavaScript(74.4%), CSS(25.6%), Next.js, React.js, Firebase, MongoDB.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaniquah/udemy-nextjs.git",
    previewUrl: "https://nextjs-events-app-beta.vercel.app/",
  },
  {
    id: 3,
    title: "Blog",
    image: "/images/projects/blog-thumb.png",
    description:
      "A fully functional blog built A to Z using NextJS & ReactJS featuring user authentication, CRUD operations for blog posts, responsive design, SEO optimization, and more.",
    technologies: "JavaScript, CSS, Next.js, React.js, Node.js, MongoDB",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaniquah/udemy-nextjs-blog.git",
    previewUrl: "https://myblogg-seven.vercel.app/",
  },
];

export default function Projects() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function handleTagChange(newTag) {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
