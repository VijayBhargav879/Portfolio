import { useTheme } from "../../provider/page";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlipWords } from "../../components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ShootingStars } from "../../components/ui/shooting-stars";
import config from "@/config/config";
import { ArrowRightIcon, Download } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`hero min-h-screen pt-16 relative ${
          theme === "dark" ? "bg-[#090f1c] text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Spotlight */}
        <div className="pointer-events-none absolute inset-0 z-30 transition-all">
          <div className="absolute left-[10%] top-[30%] h-[300px] w-[300px] bg-gradient-to-r from-purple-900 via-indigo-800 to-cyan-900 opacity-30 blur-[100px]" />
        </div>

        {/* Background patterns */}
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[size:75px_75px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-25" />
        </div>

        <div className="container mx-auto px-2 py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center min-h-[80vh]">
            {/* Left Section */}
            <div className="md:w-1/2 w-full">
              <div className="inline-block mb-3">
                <div className="rounded-full py-1 flex items-center">
                  <div className="z-10 flex items-center justify-center">
                    <div
                      className={
                        "group rounded-full border text-base transition-all ease-in hover:cursor-pointer " +
                        (theme === "dark"
                          ? "border-white/20 hover:bg-neutral-800 !text-white"
                          : "border-black/20 hover:bg-neutral-200 text-black")
                      }
                    >
                      <AnimatedShinyText
                        className={
                          "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 " +
                          (theme === "dark"
                            ? "text-white hover:text-neutral-300"
                            : "text-black hover:text-neutral-600")
                        }
                      >
                        <span>{config.information.welcomeText}</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                      </AnimatedShinyText>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold">
                <SparklesText
                  text={config.information.helloText}
                  sparklesCount={10}
                />
                I'm <span className="text-teal-400">{config.information.name}</span>
              </h1>

              <div className="mt-8 inline-block">
                <div
                  className={`py-3 px-6 rounded-md border ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800/30"
                      : "border-gray-200 bg-gray-100"
                  }`}
                >
                  <span className="font-medium text-2xl">
                    <FlipWords
                      words={config.flipWords}
                      duration={3000}
                      className={`font-medium ${
                        theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                    />
                  </span>
                </div>
              </div>

              <p className="mt-6 text-2xl">{config.information.title}</p>

              {/* ✅ BUTTONS */}
              <div className="flex gap-4 mt-8 relative z-10 pointer-events-auto">
                {/* Get Resume */}
                <a
                  href="public/Vijay_resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-blue-500 px-6 py-3 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  Get Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>

                {/* Learn More */}
                <a
                  href="#about"
                  className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 transition duration-300"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Section - Code */}
            <div className="md:w-1/2 w-full rounded-lg overflow-hidden mt-10 md:mt-0">
              <div className="code-window bg-gray-900 rounded-lg shadow-lg relative before:absolute before:w-[200%] before:h-[200%] before:top-[-50%] before:left-[-50%] before:animate-[spin_4s_linear_infinite] before:bg-[conic-gradient(from_0deg,transparent_0_45deg,#3b82f6_45deg_135deg,transparent_135deg_180deg,transparent_180deg_225deg,#3b82f6_225deg_315deg,transparent_315deg)] before:opacity-30">
                {/* Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center relative z-10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="ml-4 text-sm text-gray-400">developer.js</div>
                </div>

                {/* Code */}
                <div className="font-mono text-3xl relative z-20">
                  <div className="relative z-20">
                    <BackgroundBeamsWithCollision>
                      <SyntaxHighlighter
                        language="javascript"
                        style={dracula}
                        customStyle={{
                          margin: 0,
                          lineHeight: "1",
                          padding: "1.5rem",
                          background: "#0f1117",
                          borderRadius: "0",
                          fontSize: "clamp(0.7rem, 2vw, 1rem)",
                        }}
                        showLineNumbers={false}
                      >
                        {config.codeContent.code}
                      </SyntaxHighlighter>
                    </BackgroundBeamsWithCollision>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShootingStars />
    </>
  );
}