import React from "react";
import {IoMail} from "react-icons/io5";
import {PiPhoneCallFill} from "react-icons/pi";
import {MdOutlineSupportAgent} from "react-icons/md";
import about from "../images/about.jpeg"

const About = ()=>{

  return (

      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={about} alt="..."  style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">About US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <IoMail/> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <PiPhoneCallFill/> : 012-3456789
          </p>
          <p className="mt-3">
            <MdOutlineSupportAgent/> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
   
  );
};

export default About
