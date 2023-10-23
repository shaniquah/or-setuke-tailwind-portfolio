"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useTransition } from "react";

import TabButton from "./TabButton";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const TAB_DATA = [
  {
    title: "Tech Skills",
    id: "tech-skills",
    content: (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="list-disc pl-2"
      >
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">HTML</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">CSS</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">JavaScript</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Reacts</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Next.js</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Node.js</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">npm</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">MongoDB</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Firebase</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Supabase</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">GitHub / Git</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Visual Studio Code</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Netlify</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Vercel</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Figma / FigJam</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Miro</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Slack</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Discord</motion.li>
      </motion.ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft-skills",
    content: (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="list-disc pl-2"
      >
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">User-Centric Thinking</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Self-Starter</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Dynamic & Analytical Thinking</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Quick-wit & Fast Learning</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Adaptable</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Trend-Savvy</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Communication</motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-300">Team-Orientation</motion.li>
      </motion.ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="list-none pl-2"
      >
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-sky-200">
          <a
            className=" hover:text-blue-100"
            href="https://www.codespace.co.za/"
          >
            CodeSpace Academy
          </a>{" "}
          | 2022 - Current
        </motion.li>
        <motion.li variants={item} className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-sky-200">
          <a
            className="hover:text-blue-100"
            href="https://www.lebonecollege.co.za/"
          >
            Lebone II College of the Royal Bafokeng
          </a>{" "}
          | 2015 - 2020
        </motion.li>
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="list-none pl-2"
      >
        <motion.li variants={item}>
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-sky-200 hover:text-blue-100"
            href="/certifications/Academic_Transcript_-_BCL2302_-_OTSSET869_Otshepeng_Setuke.pdf"
          >
            Fullstack JSE Academic Transcript
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-sky-200 hover:text-blue-100"
            href="/certifications/EF SET Certificate.pdf"
          >
            EF SET Certificate
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-sky-200 hover:text-blue-100"
            href="/certifications/"
          >
            Programming Fundamentals Completion Certificate
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-sky-200 hover:text-blue-100"
            href="/certifications/Udemy-CL&BCSP certificate.pdf"
          >
            Udemy Computer Literacy Completion Certificate
          </a>
        </motion.li>
      </motion.ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    // isPending(true)
    startTransition(() => {
      setTab(id);
    });
  }

  const tabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-full bg-gradient-to-br from-slate-500 via-purple-300 to-yellow-200">
          <Image
            src={"/images/about-profile-desk-removebg-preview.png"}
            width={500}
            height={500}
          />
        </div>
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

          {tabData && tabData.content}
        </div>
      </div>
    </section>
  );
}
