import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description: "Description for Advertising",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "Description for Content marketing",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description: "Description for Content writing",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description: "Description for Social media",
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        description="We offer a range of services to help you achieve your goals."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
