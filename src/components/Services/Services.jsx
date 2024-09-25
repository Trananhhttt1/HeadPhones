import React from "react";
import Icon1 from "../../asset/obj/obj1.png";
import Icon2 from "../../asset/obj/obj2.png";
import Icon3 from "../../asset/obj/obj3.png";

import { UpdateFollower } from "react-mouse-follower";
const Services = () => {
  const ServicesData = [
    {
      id: 1,
      title: "Security",
      icon: Icon1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Guarante",
      icon: Icon2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Affordability",
      icon: Icon3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10"> Services</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {ServicesData.map((service) => {
              return (
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "White",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 3,
                    mixBlendMode: "normal",
                    backgroundElement: (
                      <div>
                        {" "}
                        <img src={service.icon} alt="" />
                      </div>
                    ),
                  }}
                >
                  <div className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white">
                    <img src={service.icon} alt="" className="w-[100px] mb-4" />
                    <div className="text-center space-y-2">
                      <h1 className="text-2xl font-bold">{service.title}</h1>
                      <p className="text-center text-sm text-black/75">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
