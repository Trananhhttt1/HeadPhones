import React from "react";
import Blog1 from "../../asset/Blog/blog1.jpg";
import Blog2 from "../../asset/Blog/blog2.jpg";
import Blog3 from "../../asset/Blog/blog3.jpg";
import Blog4 from "../../asset/Blog/blog4.jpg";
import { motion } from "framer-motion";
const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: Blog1,
      title: "Introducing our new smart headphones",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus non velit fermentum, in iaculis risus condimentum. Sed et metus vel erat bibendum faucibus. Sed id enim vel velit dictum eleifend. ",
    },
    {
      id: 2,
      image: Blog2,
      title: "Introducing our new smart headphones",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus non velit fermentum, in iaculis risus condimentum. Sed et metus vel erat bibendum faucibus. Sed id enim vel velit dictum eleifend. ",
    },
    {
      id: 3,
      image: Blog3,
      title: "Introducing our new smart headphones",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus non velit fermentum, in iaculis risus condimentum. Sed et metus vel erat bibendum faucibus. Sed id enim vel velit dictum eleifend. ",
    },
    {
      id: 4,
      image: Blog4,
      title: "Introducing our new smart headphones",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod purus non velit fermentum, in iaculis risus condimentum. Sed et metus vel erat bibendum faucibus. Sed id enim vel velit dictum eleifend. ",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        // duration: 2,
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <motion.h1
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="text-3xl font-bold text-center font-poppins pb-8"
          >
            Blogs
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {blogData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
                >
                  <img src={item.image} alt="" />
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold line-clamp-2">
                      {item.title}
                    </h1>
                    <p className="line-clamp-2">{item.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
