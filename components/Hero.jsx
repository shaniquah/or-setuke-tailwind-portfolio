/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I&apos;m{" "}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                "Otshepeng Setuke!",
                1000, 
                "a Web Developer!",
                1000,
                "a Junior Software Developer!",
                1000,
                "a FullStack JavaScript Engineer!",
                1000,
                "a React.js Developer!",
                1000,
                "a Next.js Developer!",
                1000,
                "a Software Tester!",
                1000,
                "a Software Engineer!",
                1000,
                "a UI / UX Developer!",
                1000,
                "a FullStack Developer!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#90afc5] text-base sm:text-lg lg:text-xl">
            I am an aspiring Junior Software Developer with experience in
            Full-Stack JavaScript Engineering. I have experience in web
            development especially frontend frameworks like ReactJS.
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 > via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                Download My CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#0e0e0e] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
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
