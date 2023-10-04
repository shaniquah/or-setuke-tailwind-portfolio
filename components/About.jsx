"use client";
import Image from "next/image";
import { useState, useTransition } from "react";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Tech Skills",
    id: "tech-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS.js</li>
        <li>JavaScript</li>
        <li>Reacts</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>npm</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>Supabase</li>
        <li>GitHub / Git</li>
        <li>Visual Studio Code</li>
        <li>Netlify</li>
        <li>Vercel</li>
        <li>Figma / FigJam</li>
        <li>Miro</li>
        <li>Slack</li>
        <li>Discord</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>CodeSpace Academy</li>
        <li>Lebone II College of the Royal Bafokeng</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Fundamentals Completion Certificate</li>
        <li>Udemy Computer Literacy Completion Certificate</li>
      </ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about-image.png"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <br />
          <p className="text-base lg:text-lg">
            Hi, I&apos;m Otshepeng Setuke. I am a passionate and driven software
            developer with a strong background in web application development.
            My journey in the world of software development has been fueled by a
            deep curiosity and a desire to create innovative solutions that make
            a positive impact. I specialize in both front-end and back-end
            development, constantly embracing new technologies and staying
            attuned to industry trends.
            <br />

            <br />
            My career path as a young professional has equipped me with a solid
            foundation in software development, along with expertise in
            Git/GitHub, documentation, quality assurance, and agile
            methodologies. This journey has been driven by my unwavering passion
            for technology and an unyielding commitment to excellence.
            <br />

            <br />
            I am dedicated to contributing innovative solutions and delivering
            high-quality results, qualities that have been instrumental in my
            pursuit of success in this dynamic and ever-evolving field. My
            ultimate goal is to leverage my skills and experiences to make a
            meaningful impact and continue thriving in the exciting and
            ever-changing world of software development.
            <br />
            
            <br />
            With a blend of enthusiasm and expertise, I'm ready to take on new
            challenges and contribute to cutting-edge projects that shape the
            future of technology.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("tech-skills")}
              active={tab === "tech-skills"}
            >
              {" "}
              Tech Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft-skills")}
              active={tab === "soft-skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>

          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)}</div>
        </div>
      </div>
    </section>
  );
}
