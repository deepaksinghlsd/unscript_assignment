import React from "react";
import logo from "../assets/Group000007183.png";
const Footer = () => {
  return (
    <div className="relative h-auto">
      <div className="absolute left-[20%] top-[-30%] z-20">
        <div className="bg-custom-gradient flex h-[200px] rounded-md justify-between items-center p-6 ">
          <h1 className="font-bold text-[40px]">Book a demo</h1>
          <div className="w-[50%]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            </p>
            <div className="flex">
              <input type="text" className="" />
              <button className="ps-2 pe-2 pt-1 pb-1 bg-black text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  border-b bg-[#0C111D] text-white p-8 flex flex-col gap-3 relative h-[80vh] pt-28">
        <div className="border-b-[1px] border-[#D3D3D3] pb-2">
          <img src={logo} alt="" className="h-10 mix-blend-multiply" />
        </div>
        <div className="flex justify-between">
          <div className="w-[23%]">
            <h1 className="pb-2 border-b-[1px] border-[#D3D3D3] mb-2 rounded-sm font-bold text-lg">
              Usecase
            </h1>
            <ul className="flex flex-col gap-2 list-none ">
              <li>Learning and Development</li>
              <li>Marketing Teams</li>
              <li>Personalised videos</li>
              <li>Dubbing</li>
              <li>Customer Service</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div className="w-[23%]">
            <h1 className="pb-2 border-b-[1px] border-[#D3D3D3] font-bold text-lg mb-2 rounded-sm">
              Features
            </h1>
            <ul className="flex flex-col gap-2 list-none ">
              <li>AI Avatars</li>
              <li>Video Dubbing</li>
              <li>AI Face Swap</li>
              <li>Customised Virtual Influencer</li>
              <li>Video Personalisation</li>
            </ul>
          </div>
          <div className="w-[23%]">
            <h1 className="pb-2 border-b-[1px] border-[#D3D3D3] font-bold text-lg mb-2 rounded-sm">
              Resource
            </h1>
            <ul className="flex flex-col gap-2 list-none ">
              <li>Blogs</li>
              <li>Support</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="w-[23%]">
            <h1 className="pb-2 border-b-[1px] border-[#D3D3D3] font-bold text-lg mb-2 rounded-sm">
              Company
            </h1>
            <ul className="flex flex-col gap-2 list-none ">
              <li>About us</li>
              <li>Contact</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div className="relative flex gap-48">
          <p className="w-[35%]">
            2nd Floor, 2735, 16th Cross Rd, PWD Quarters, 1st Sector, HSR
            Layout, Bengaluru, Karnataka 560102
          </p>
          <p>Copyright @ 2024 UnscriptAI</p>
        </div>
          
      </div>
    </div>
  );
};

export default Footer;
