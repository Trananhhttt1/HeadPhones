import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md"; // Thêm icon MdClose
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { delay, motion } from "framer-motion";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State quản lý dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const textLogoVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };

  const textLinkVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: index * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  const navBarMenu = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "Categories", link: "#" },
    { id: 3, title: "Blog", link: "#" },
    { id: 4, title: "About", link: "#" },
    { id: 5, title: "Contact", link: "#" },
  ];

  return (
    <>
      <div className="bg-brandDark text-white py-6 font-varela">
        <nav className="container flex justify-between items-center">
          {/* ---logo--- */}
          <motion.div
            variants={textLogoVariants}
            initial="hidden"
            animate="visible"
          >
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <a href="" className="text-xl font-bold uppercase">
                Playing/
                <span className="font-extralight text-white">Market</span>
              </a>
            </UpdateFollower>
          </motion.div>
          {/* menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {navBarMenu.map((item, index) => {
                return (
                  <motion.li
                    key={item.id}
                    variants={textLinkVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 999,
                        followSpeed: 1,
                        scale: 5,
                        mixBlendMode: "difference",
                      }}
                    >
                      <a
                        href={item.link}
                        className="inline-block text-sm py-2 px-3 uppercase"
                      >
                        {item.title}
                      </a>
                    </UpdateFollower>
                  </motion.li>
                );
              })}

              <motion.button
                className="text-xl ps-14"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                  ease: "easeInOut",
                }}
              >
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 2,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <SlEarphones></SlEarphones>
                </UpdateFollower>
              </motion.button>
            </ul>
          </div>
          {/* mobile section */}
          <div className="md:hidden">
            {/* Icon menu toggle */}
            <button onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <MdClose className="text-4xl" />
              ) : (
                <MdMenu className="text-4xl" />
              )}
            </button>
          </div>
        </nav>

        {/* Dropdown Menu cho Mobile */}
        {isDropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden bg-brandDark"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {navBarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="text-sm uppercase">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Header;
