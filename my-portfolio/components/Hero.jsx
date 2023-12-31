/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// import NavLink from "./NavLink";
import { classes } from "./Hero.module.css";

export default function Hero() {
  const downloadCV =
    "/resume-download/FullStack_JS_Software_Dev_Intern_Resume.pdf";

  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-12 mt-10">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Otshepeng Setuke!",
                2500,
                "a Web Developer!",
                2500,
                "a Software Developer!",
                2500,
                "a FullStack JS Engineer!",
                2500,
                "a React.js Developer!",
                2500,
                "a Next.js Developer!",
                2500,
                "a Software Tester!",
                2500,
                "a Software Engineer!",
                2500,
                "a UI / UX Developer!",
                2500,
                "a UI / UX Designer!",
                2500,
                "a FullStack Developer!",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br/>
          <p className="text-[#90afc5] text-base sm:text-lg lg:text-xl mt-8">
            I am an aspiring Junior Software Developer with experience in
            Full-Stack JavaScript Engineering looking for entry-level roles. I have experience in web
            development especially frontend frameworks like ReactJS.
          </p>

          <div>
            <button
              className={`px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 > via-purple-500 to-pink-500 text-white hover:text-blue-200`}
            >
              <a href="mailto:or.setuke@gmail.com">Reach Out</a>
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 > via-purple-500 to-pink-500 text-white hover:text-blue-200 ">
              <a href="https://padlet.com/shaniquahsetuke/my-data-portfolio-8ni0o5zjr6gqacfd">
                <span>View My Padlet</span>
              </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-100 text-white  mt-3">
              <a href={downloadCV} download={"Otshepeng Setuke's CV"}>
                <span className="block bg-black hover:bg-slate-500 rounded-full px-5 py-2">
                  Download My CV
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0 mr-0">
          <div className="rounded-full bg-gradient-to-br from-yellow-400 via-pink-900 to-black w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-profile-colored-removebg-preview.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
