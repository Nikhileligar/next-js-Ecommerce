"use client"
import  React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import '../../app/app.css'
export default function Dropdown () {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown-container">
        <button onClick={toggleDropdown}>
          <HiOutlineChevronDown />
        </button>
  
        {isOpen && (
          <div className="dropdown-content">
            {/* Dropdown content goes here */}
            <p>Dropdown Item 1</p>
            <p>Dropdown Item 2</p>
            <p>Dropdown Item 3</p>
          </div>
        )}
      </div>
    );
  };
  