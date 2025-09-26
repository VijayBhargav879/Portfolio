import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";
import OlovaLogo from "../../assets/olova.png";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark"
            ? "bg-[#090f1c] text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hello! I’m M. Vijay Bhargav, an aspiring DevOps and Cloud Engineer with a passion for building 
                smart, scalable, and sustainable tech solutions.
                With a strong foundation in Python, Linux, and GitHub Actions, 
                I enjoy crafting automation pipelines that bring speed, reliability, and efficiency to software development.{" "}
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  
                </span>
                , 
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My focus lies in modern DevOps workflows, cloud platforms like AWS and Azure, and infrastructure as code using tools like Terraform and Docker. 
                I’m also exploring AI integrations, having built GPT-powered chatbots with Rasa and React to solve real-world problems and raise awareness in areas like renewable energy.
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    I’m a driven learner and problem-solver, constantly experimenting with new technologies to improve development processes. Whether it’s deploying CI/CD pipelines or integrating machine learning into apps, I aim to create tools that deliver impact — and empower developers and communities alike.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      M. Vijay Bhargav, 
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        
                      />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
