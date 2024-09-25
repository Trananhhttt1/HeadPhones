import React from "react";
import HeadPhone from "../../asset//headphone4.png";
import { easeIn, motion } from "framer-motion";
const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        // duration: 2,
        staggerChildren: 0.6,
      },
    },
  };
  const imgVariants = {
    hidden: { opacity: 0, rotate: 180 },
    visible: {
      opacity: 1,
      rotate: [-180, 0],
      transition: { duration: 0.5, easeIn },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        ease: "easeInOut",
        duration: 0.9,
      },
    },
  };

  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 md:space-y-0 gap-12">
          <div>
            <motion.img
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              src={HeadPhone}
              alt=""
              className="w-[300px] md:w-[400px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="text-center md:text-left space-y-4 lg:max-w-[450px]"
            >
              <motion.h1
                variants={textVariants}
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The lester HeadPhone With the Laster technology
              </motion.h1>
              <motion.p variants={textVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                placeat illum, tenetur soluta quod ipsam ea at doloribus
                officiis. Alias, minus doloremque.
              </motion.p>
              <motion.button
                variants={textVariants}
                className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
