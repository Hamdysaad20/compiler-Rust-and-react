import React from "react";

const Footer = () => {
  return (
    <div className='fixed  bottom-0 bg-[#] px-2 py-4 bg-[#031620] flex items-center justify-center w-full text-xs text-gray-100 '>
      <span>
        Created by
        <a
          href='https://divzoon.com'
          target='__blank'
          className='text-gray-50  hover:bg-red-500 hover:text-white font-medium'>
          {" "}
          Divzoon{" "}
        </a>
      </span>
    </div>
  );
};

export default Footer;
