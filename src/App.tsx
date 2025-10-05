import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { webProjects } from "./data/webProject";
import { designProjects } from "./data/designProject";
import me from "/me.jpg";
import InteractiveParticles from "./components/ParticleBackground";
import { skills } from "./data/skill";

export default function App() {
  const [activeTab, setActiveTab] = useState<"web" | "design">("web");
  const projects = activeTab === "web" ? webProjects : designProjects;

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <InteractiveParticles />

      <div className="relative z-10 flex items-center justify-center py-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[90%] max-w-4xl flex flex-col items-center text-center"
        >
          {/* Profile */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/60 shadow-xl mb-4"
          >
            <img
              src={me}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl font-black text-transparent h-20 bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
            Tegar Setio
          </h1>

          <p className="text-gray-300 mt-2 text-lg sm:text-xl">
            Full Stack Developer <span className="mx-1">•</span> UI/UX Designer
          </p>

          {/* Social */}
          {/* <div className="flex gap-6 mt-6">
            <SocialIcon href="https://wa.me/0882005090497">
              <FaWhatsapp />
            </SocialIcon>
            <SocialIcon href="mailto:tegarsetio02@gmail.com">
              <FaEnvelope />
            </SocialIcon>
            <SocialIcon href="https://github.com/kopsus">
              <FaGithub />
            </SocialIcon>
          </div> */}

          {/* Skill Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-full px-8 py-16"
          >
            <h3 className="text-center text-2xl font-semibold mb-10">
              Technologies I Use
            </h3>
            <div className="flex justify-center items-center flex-wrap gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.15 }}
                    className="w-24 h-24 flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition"
                  >
                    <Icon
                      className="text-3xl mb-2"
                      style={{ color: skill.color }}
                    />

                    <span className="text-sm text-white/70">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 flex gap-2">
            <TabButton
              label="Web Projects"
              active={activeTab === "web"}
              onClick={() => setActiveTab("web")}
            />
            <TabButton
              label="Design Projects"
              active={activeTab === "design"}
              onClick={() => setActiveTab("design")}
            />
          </div>

          {/* Projects */}
          <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="group relative p-4 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-md" />
                  <div className="relative z-10">
                    <h2 className="text-lg font-bold">{project.title}</h2>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-white/70 hover:text-white text-2xl transition hover:scale-105 duration-300"
    >
      {children}
    </a>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all ${
        active
          ? "bg-indigo-500 text-white shadow-lg"
          : "text-white/70 hover:bg-indigo-100/20"
      }`}
    >
      {label}
    </button>
  );
}
