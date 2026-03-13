import React from "react";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "React",
      description: "Build interactive UIs with component-based architecture",
      icon: FaReact,
      color: "text-sky-400",
    },
    {
      id: 2,
      title: "Next.js",
      description: "Full-stack framework for production-ready applications",
      icon: RiNextjsLine,
      color: "text-black dark:text-white",
    },
    {
      id: 3,
      title: "NextAuth.js",
      description: "Secure authentication and authorization solution",
      icon: IoShieldCheckmarkSharp,
      color: "text-yellow-500",
    },
    {
      id: 4,
      title: "MongoDB",
      description: "Flexible NoSQL database for scalable data storage",
      icon: SiMongodb,
      color: "text-green-600",
    },
  ];

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <IconComponent size={48} className={feature.color} />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
