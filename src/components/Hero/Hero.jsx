import React, { useState } from "react";
import headPhone1 from "../../asset/headphone1.png";
import headPhone2 from "../../asset/headphone2.png";
import headPhone3 from "../../asset/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const headPhoneData = [
    {
      id: 1,
      image: headPhone1,
      title: "Headphones Wireless 1",
      subtitle:
        "Whether you're looking for versatile Bluetooth headphones with extra features, like active noise cancelling (ANC), or if you're a discerning audiophile who only wants the best sound possible, there's something out there for everyone.",
      price: "$199",
      modal: "Modal Brown",
      bgColor: "#8b5958",
    },
    {
      id: 2,
      image: headPhone2,
      title: "Headphones Wireless 2",
      subtitle:
        "Whether you're looking for versatile Bluetooth headphones with extra features, like active noise cancelling (ANC), or if you're a discerning audiophile who only wants the best sound possible, there's something out there for everyone.",
      price: "$199",
      modal: "Lime Green",
      bgColor: "#638153",
    },
    {
      id: 3,
      image: headPhone3,
      title: "Headphones Wireless 3",
      subtitle:
        "Whether you're looking for versatile Bluetooth headphones with extra features, like active noise cancelling (ANC), or if you're a discerning audiophile who only wants the best sound possible, there's something out there for everyone.",
      price: "$199",
      modal: "Blue okla",
      bgColor: "#5d818c",
    },
  ];

  const [activeData, setActive] = useState(headPhoneData[0]);

  const handleActiveData = (data) => {
    setActive(data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.3, // Thời gian trì hoãn giữa các phần tử con
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* --headphone info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[550px]">
            <div className="space-y-5 md:text-left text-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeData.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-3xl lg:text-6xl font-bold font-varela"
                >
                  {activeData.title}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.button
                  key={activeData.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ backgroundColor: activeData.bgColor }}
                  className="px-4 py-2  font-normal rounded-sm"
                >
                  Buy and Listen
                </motion.button>
              </AnimatePresence>

              {/* --Headphone List Separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase txt-sm">Top HeadPhones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* ---headphones List */}
              <motion.div
                variants={containerVariants} // Parent variants
                initial="hidden"
                animate="visible"
                className="grid grid-cols-3 gap-10"
              >
                {headPhoneData.map((item) => {
                  return (
                    <motion.div
                      variants={itemVariants}
                      className="grid grid-cols-2 place-items-center cursor-pointer gap-1"
                    >
                      <div>
                        <img
                          src={item.image}
                          alt=""
                          onClick={() => {
                            handleActiveData(item);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xss font-normal text-nowrap">
                          {item.modal}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* --hero image */}
          <div className="flex flex-col justify-end items-center">
            <img
              src={activeData.image}
              alt=""
              className="w-[300px] m:w-[400px] xl:w-[550px]"
            />
          </div>
          {/* ===what app icons */}
          <div className="text-3xl text-black fixed  bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <div>
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
