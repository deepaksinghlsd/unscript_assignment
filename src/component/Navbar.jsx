import React from "react";
import img from "../assets/Group000007183.png"

const Navbar = () => {
  return (
    <div className="flex justify-around shadow-xl py-3">
      <div className="w-[148px]">
        <ul>
          <li>
            <img src={img} alt="" />
          </li>
        </ul>
      </div>

      <div className="flex">
        <ul className="flex gap-6 text-xl font-semibold">
          <li>
            <select>
              <option value="" key="">Use cases</option>
            </select>
          </li>
          <li>
            <select>
              <option value="" key="">Features</option>
            </select>
          </li>
          <li>
            <select>
              <option value="" key="">Resource</option>
            </select>
          </li>
          <li>
            <select>
              <option value="" key="" >Company</option>
            </select>
          </li>
        </ul>
      </div>
      <div>
       
            <button className="px-3 py-3 rounded-sm bg-blue-700 text-white">Contact Sales</button>
        
      </div>
    </div>
  );
};

export default Navbar;
