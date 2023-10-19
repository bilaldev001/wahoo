"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

import CustomButton from "./CustomButton";

const Dropdown = ({ btnTitle, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="relative">
        <CustomButton
          onClick={() => setIsOpen((prev) => !prev)}
          className="border-none rounded-full outline-none"
        >
          <svg
            width="39"
            height="40"
            viewBox="0 0 39 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.4965 32.4966C36.4982 30.0901 37.8904 27.2373 38.5554 24.1796C39.2203 21.1218 39.1384 17.949 38.3166 14.9295C37.4947 11.91 35.9571 9.13279 33.8339 6.83266C31.7106 4.53253 29.0642 2.7772 26.1184 1.71516C23.1726 0.653119 20.0141 0.315616 16.9102 0.731201C13.8062 1.14678 10.8481 2.30323 8.28606 4.10271C5.72402 5.90218 3.63342 8.29175 2.19113 11.0693C0.74883 13.8468 -0.00273556 16.9305 7.48171e-06 20.0597C0.00106008 24.6085 1.60537 29.0117 4.53142 32.4966L4.50355 32.5202C4.60111 32.6372 4.71262 32.7375 4.81298 32.8531C4.93843 32.9965 5.07363 33.1316 5.20326 33.2709C5.59354 33.6943 5.99497 34.101 6.41591 34.4826C6.54415 34.5995 6.67656 34.7082 6.80619 34.8196C7.25222 35.204 7.7108 35.5689 8.1861 35.9087C8.24743 35.9505 8.30319 36.0048 8.36452 36.048V36.0313C11.6291 38.3267 15.5235 39.5586 19.5153 39.5586C23.5072 39.5586 27.4016 38.3267 30.6662 36.0313V36.048C30.7275 36.0048 30.7818 35.9505 30.8446 35.9087C31.3185 35.5675 31.7785 35.204 32.2245 34.8196C32.3541 34.7082 32.4865 34.5982 32.6148 34.4826C33.0357 34.0996 33.4371 33.6943 33.8274 33.2709C33.957 33.1316 34.0909 32.9965 34.2177 32.8531C34.3167 32.7375 34.4296 32.6372 34.5271 32.5188L34.4965 32.4966ZM19.5139 8.91799C20.7545 8.91799 21.9672 9.28555 22.9987 9.9742C24.0301 10.6629 24.8341 11.6417 25.3088 12.7868C25.7836 13.932 25.9078 15.1921 25.6658 16.4079C25.4237 17.6236 24.8264 18.7403 23.9492 19.6168C23.072 20.4932 21.9543 21.0901 20.7376 21.332C19.5209 21.5738 18.2597 21.4497 17.1136 20.9753C15.9675 20.501 14.9879 19.6977 14.2987 18.667C13.6095 17.6364 13.2416 16.4247 13.2416 15.1852C13.2416 13.523 13.9024 11.9289 15.0787 10.7536C16.255 9.57828 17.8504 8.91799 19.5139 8.91799ZM8.37288 32.4966C8.39706 30.6679 9.14082 28.9222 10.4432 27.6373C11.7457 26.3524 13.5021 25.6314 15.3324 25.6305H23.6955C25.5258 25.6314 27.2822 26.3524 28.5846 27.6373C29.8871 28.9222 30.6308 30.6679 30.655 32.4966C27.5981 35.249 23.629 36.7723 19.5139 36.7723C15.3989 36.7723 11.4298 35.249 8.37288 32.4966Z"
              fill="#07B6BF"
            />
          </svg>

          {/* <MdArrowDropDown /> */}
        </CustomButton>

        {isOpen && (
          <div
            className={`absolute top-10 right-0 z-30 w-[200px] min-h-auto flex flex-col py-4 bg-gray-800 text-gray-400 rounded-md`}
          >
            {items.map((item, index) => (
              <Link
                prefetch
                key={index}
                className="hover:bg-gray-950 hover:text-white-500 px-4 py-1"
                href={item?.route || ""}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={() => setIsOpen((prev) => !prev)}
        ></div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

export default Dropdown;
