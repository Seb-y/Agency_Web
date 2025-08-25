import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Project One: Mobile App",
      description: "Description for Project One",
      image: assets.work_mobile_app,
    },
    {
      title: "Project Two: Dashboard Management",
      description: "Description for Project Two",
      image: assets.work_dashboard_management,
    },
    {
      title: "Project Three: Fitness App",
      description: "Description for Project Three",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        description="We take pride in our work and strive to deliver the best results for our clients."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-113 duration-500 transition-all cursor-pointer"
          >
            <img
              src={work.image}
              className="w-full rounded-xl"
              alt={work.title}
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-65 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
