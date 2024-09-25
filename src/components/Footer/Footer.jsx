import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

import { motion } from "framer-motion";
import CreditCard from "../../asset/credit-cards.webp";
const Footer = () => {
  return (
    <>
      <div className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6 "
            >
              <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, est. .
              </p>
              <div>
                <p className="flex items-center gap-2 mt-2">
                  <FaPhone></FaPhone>+84 09447733
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation></FaMapLocation>Nodia, Uttar Pradesh
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-125 duration-300"></FaFacebook>
                <FaInstagram className="text-3xl hover:scale-125 duration-300"></FaInstagram>
                <FaTelegram className="text-3xl hover:scale-125 duration-300"></FaTelegram>
                <FaGoogle className="text-3xl hover:scale-125 duration-300"></FaGoogle>
              </div>
              <div>
                <h1 className="text-xl mb-2 font-semibold">Payment Methods</h1>
                <img src={CreditCard} alt="" className="w-[80%]" />
              </div>
            </motion.div>
          </div>
          <p className="text-white text-center mt-8 pt-8 border-t-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
