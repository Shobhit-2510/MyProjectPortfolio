import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white flex flex-col h-[20vh] md:h-[30vh] justify-center">
      <div className="content flex justify-center gap-4 md:gap-16 items-center ">
        <div className="left">
          <h1 className="text-sm md:text-xl mb-2 text-center">Contact details:</h1>
          <h2 className="text-xs md:text-sm text-center">+91-9319894169</h2>
          <h2 className="text-xs md:text-sm text-center">+91-9311819982</h2>
        </div>
        <div className="mid">
          <h1 className="text-sm md:text-xl mb-2 text-center">Email:</h1>
          <h1 className="flex justify-center items-center">
            <a
              href="mailto: sshobhit1106@gmail.com"
              className="text-xs md:text-sm text-center"
            >
              sshobhit1106@gmail.com
            </a>
          </h1>
          <h1 className="flex justify-center items-center">
            <a
              href="mailto: ch7230769@chemical.iitd.ac.in"
              className="text-xs md:text-sm text-center"
            >
              ch7230769@.iitd.ac.in
            </a>
          </h1>
        </div>
        <div className="right">
          <h1 className="text-sm md:text-xl mb-2">Follow on:</h1>
          <h2 className="text-xs md:text-sm flex justify-evenly">
            <img
              src="src/assets/fb.png"
              alt=""
              className="bg-white w-6 h-6 md:h-8 md:w-8 rounded-full"
            />
            <img
              src="src/assets/insta.png"
              alt=""
              className="bg-white w-6 h-6 md:h-8 md:w-8 rounded-[7px] md:rounded-[10px]"
            />
          </h2>
        </div>
        <div className="line bg-gray-400 w-[1px] h-full hidden sm:block "></div>
        <div className="rightmost  flex-col justify-center hidden sm:flex ">
          <h1 className="text-sm md:text-xl mb-2">Links</h1>
          <a className="text-xs md:text-sm">About</a>
          <a className="text-xs md:text-sm">Project</a>
          <a className="text-xs md:text-sm">Resume</a>
          <a className="text-xs md:text-sm">Home</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
