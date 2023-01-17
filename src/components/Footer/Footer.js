import React, { useState } from "react";
import "./Footer.css";
import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import {FaChevronUp} from 'react-icons/fa'

export default function Footer() {
  const [isActive, setActive] = useState(false);
  const [isChev, setChev] = useState(false);

  const changeLook = () =>{
    setActive(!isActive);
    setChev(!isChev);
  }
  return (
    <>
      <div className="hidden md:block shadow starbucks mt-8 border-t pt-6">
        <div className="md:container mx-auto">
          <section className="flex h-[300px] w-[85%] justify-between ">
            <div>
              <p className="weight mb-8 text-left">About Us</p>
              <ul className="text-slate-600 flex flex-col size1 w-[200px] justify-between h-[250px] text-left">
                <li>Our Company</li>
                <li>Our Coffee</li>
                <li>Stories and News</li>
                <li>Starbucks Archive</li>
                <li>Investor Relations</li>
                <li>Customer Service</li>
              </ul>
            </div>
            <div>
              <p className="weight mb-8 text-left">Careers</p>
              <ul className="text-slate-600 flex flex-col size1 w-[150px] justify-between h-[250px] text-left">
                <li>Culture and Values</li>
                <li>Incusion, Diversity, and Equity</li>
                <li>College Achievement Plan</li>
                <li>Alumni Community</li>
                <li>U.S. Careers</li>
                <li>International Careers</li>
              </ul>
            </div>
            <div>
              <p className="weight mb-8 text-left">Social Impact</p>
              <ul className="text-slate-600 flex flex-col size1 w-[200px] justify-between h-[120px] text-left">
                <li>People</li>
                <li>Planet</li>
                <li>Enviromental and Social Impact Reporting</li>
              </ul>
            </div>

            <div>
              <p className="weight mb-8 text-left">For Business Partners</p>
              <ul className="text-slate-600 flex flex-col size1 w-[200px] justify-between h-[170px] text-left">
                <li>Landlord Support Center</li>
                <li>Suppliers</li>
                <li>Corporate Gift Card Sales</li>
                <li>Office adn Foodservice Coffee</li>
              </ul>
            </div>

            <div>
              <p className="weight mb-8 text-left">Order and Pickup</p>
              <ul className="text-slate-600 flex flex-col size1 w-[200px] justify-between h-[200px] text-left">
                <li>Order on the App</li>
                <li>Order on the Web</li>
                <li>Delivery</li>
                <li>Order and Pickup Options</li>
                <li>Explore and Find Coffee for Home</li>
              </ul>
            </div>
          </section>

          {/* icons */}

          <section className="flex flex-col border-t pt-5 mt-5 align-starts">
            <ul className="flex text-3xl w-[250px] justify-between mb-5">
              <FaSpotify />
              <FaFacebook />
              <FaPinterest />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
            </ul>

            <ul className="flex size justify-between w-[80%] mb-10">
              <li>Privacy Notice</li>
              <li>Terms of Use</li>
              <li>Do Not Share My Personal Infomation</li>
              <li>CA Supply Chain Act</li>
              <li>Cookie Preferences</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="md:hidden">
        <div class="md:hidden mobile-menu">
          <ul class="">
            <li class="flex justify-between px-2 py-4 text-black   " onClick={changeLook}>
              <span className="text-center font-semibold ">Home </span>
              <div className=" ml-[25%]">
            {isChev ?  <FaChevronDown  className="flex text-2xl mt-2 " /> :  <FaChevronUp className="flex text-2xl mt-2" />}
               
               
              </div>
            </li>
              {isActive ? 
                  <div className="ml-5 sb-icon-hover" >
                    <ul className="text-slate-600 flex flex-col w-[200px] justify-between h-[250px] text-left">
                      <li>Our Company</li>
                      <li>Our Coffee</li>
                      <li>Stories and News</li>
                      <li>Starbucks Archive</li>
                      <li>Investor Relations</li>
                      <li>Customer Service</li>
                    </ul>
                  </div>
                 : 
                  <div></div>
                }
            <li class=" flex justify-between px-2 py-4 text-black   ">
              <span className="text-center font-semibold ">Careers </span>
              <div className=" ml-[25%]">
                <FaChevronUp className="flex  text-2xl mt-2" />
              </div>
            </li>
            <li>
              <a
                href="#about"
                class="block flex justify-between px-2 py-4 text-black   "
              >
                <span className="text-center font-semibold ">
                  Social Impact{" "}
                </span>
                <div className=" ml-[25%]">
                  <FaChevronUp className="flex  text-2xl mt-2" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block flex justify-between px-2 py-4 text-black   "
              >
                <span className="text-center font-semibold ">
                  For Business Partners{" "}
                </span>
                <div className=" ml-[25%]">
                  <FaChevronUp className="flex  text-2xl mt-2" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block flex justify-between px-2 py-4 text-black   "
              >
                <span className="text-center font-semibold ">
                  Order and Pickup
                </span>
                <div className=" ml-[25%]">
                  <FaChevronUp className="flex  text-2xl mt-2" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
