import React, { useEffect, useState } from "react";
import "./index.css";
import "./All.css"
import Img1 from "./Img/own.png";
import p1 from "./Img/p1.png";
import p2 from "./Img/p22.png";
import p3 from "./Img/p3.png";
import p4 from "./Img/image.png";
import { FaReact } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiMongodb } from "react-icons/si"; // Importing the required icons
import { DiNodejs } from "react-icons/di"; // Importing DiNodejs icon for Node.js
import { SiExpress } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri"; // GitHub icon
import { SiPostman } from "react-icons/si"; // Postman icon
import { SiIntellijidea } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Tcss from "./Img/tailwind-css.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Loader from "./Loader.jsx";
import { MdWork } from "react-icons/md";
import { FaUsers, FaUserEdit } from "react-icons/fa";


function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoding,setIsLoding] = useState(false);

  const handleClickOpen = () => {
    setIsClicked(true);
  };
  const handleClickClose = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    setIsLoding(true);
    setTimeout(() => {
      setIsLoding(false);
    }, 1000);
    AOS.init();
    
  }, []);
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 190, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    
    <div className="border border-transperent">
      {
        isLoding ?
         <Loader/> 
         : 
         <div>
            <div className="baricon md:hidden border">
              {!isClicked && (
                <div className="barsShow fixed z-50 w-[100px] mt-[40px]">
                  <i
                    className="w-[50px] h-[50px] mx-[30px]  border-black fa-solid backdrop-blur-md bg-transparent fa-bars
                    bar text-4xl  border-2  rounded-lg font-bold text-center align-center p-1"
                    onClick={() => handleClickOpen()}
                  ></i>
                </div>
              )}
              {isClicked && (
                <div className="barclose fixed z-50 mt-[40px]">
                  <i
                    className="w-[50px] h-[50px] mx-[30px]  border-black fa-solid backdrop-blur-md bg-transparent fa-xmark 
                    bar text-4xl  border-2  rounded-lg font-bold text-center align-center p-1"
                    onClick={() => handleClickClose()}
                  ></i>
                
                </div>
              )}
            </div>
            {isClicked && (
              <nav className="mt-[120px]  fixed     md:border z-50 w-[50px] h-[54px]  rounded-lg   ml-[20px] md:bg-black  text-white px-2">
                <div className="w-full  grid lg:grid-cols-5  md:grid-cols-5 gap-0">
                  <div className="w-[50px] rounded-full  p-[30px] bg-black items-center justify-center h-[50px] p-1">
                    <HashLink
                      className="hover:bg-slate-300  duration-500 rounded-lg w-full h-full flex items-center justify-center text-[20px]"
                      smooth
                      to="#aboutMe"
                    >
                      <i class="fa-regular fa-face-smile"></i>
                    </HashLink>
                  </div>
                  {/* <div className="w-[50px] rounded-full   p-[30px]  bg-black items-center justify-center h-[50px] p-1">
                    <HashLink
                      className="hover:bg-slate-300  duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[20px]"
                      smooth
                      to="#skills"
                    >
                      <i class="fa-solid fa-list-check"></i>
                    </HashLink>
                  </div> */}
                  <div className=" w-[50px] rounded-full   p-[30px] bg-black items-center justify-center h-[50px] p-1">
                    <HashLink
                      className="hover:bg-slate-300  duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[20px]"
                      smooth
                      to="#projects"
                    >
                      <i class="fa-solid fa-file"></i>
                    </HashLink>
                  </div>
                  
                  <div className="w-[50px] rounded-full p-[30px] bg-black items-center justify-center h-[50px] p-1">
  <HashLink
    className="hover:bg-slate-300 duration-500 rounded-lg w-full h-full flex items-center justify-center text-[20px]"
    smooth
    to="#coding"
  >
    <i className="fa-solid fa-code"></i> 
  </HashLink>
</div>

                  <div className=" w-[50px] rounded-full   p-[30px] bg-black items-center justify-center h-[50px] p-1">
                    <HashLink
                        className="hover:bg-slate-300 duration-500 rounded-lg w-full h-full flex items-center justify-center text-[20px]"
                        smooth
                        to="#experience"
                      >
                        <i className="fa-solid fa-briefcase"></i>
                      </HashLink>

                  </div>

                  
                  <div className="w-[50px] rounded-full   p-[30px]  bg-black items-center justify-center h-[50px] p-1">
                    <HashLink
                      className="hover:bg-slate-300  duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[20px]"
                      smooth
                      to="#education"
                    >
                      <i class="fa-solid fa-calendar-days"></i>
                    </HashLink>
                  </div>
                  <div className="w-[50px] rounded-full  p-[30px]  bg-black items-center justify-center h-[50px] p-1">
                    <HashLink
                      className="hover:bg-slate-300  duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[20px]"
                      smooth
                      to="#connectme"
                    >
                      <i class="fa-solid fa-wifi"></i>
                    </HashLink>
                  </div>
                </div>
              </nav>
            )}
            <nav className="  mt-[20px] fixed sm:hidden md:block sm:border-0 md:border z-50 w-[620px] h-[54px] border rounded-lg border ml-3 md:bg-black  text-white px-2">
              <div className="w-full  grid lg:grid-cols-6  md:grid-cols-6 gap-0 sm:gap-0">
                <div className="w-[100px]  bg-black items-center justify-center h-[50px] p-1">
                  <HashLink
                    className="hover:bg-slate-300 hover:text-black duration-500 rounded-lg w-full h-full flex items-center justify-center text-[17px]"
                    smooth
                    to="#aboutMe"
                  >
                    AboutMe
                  </HashLink>
                </div>
                {/* <div className="w-[100px]  bg-black items-center justify-center h-[50px] p-1">
                  <HashLink
                    className="hover:bg-slate-300 hover:text-black duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[17px]"
                    smooth
                    to="#skills"
                  >
                    Skills
                  </HashLink>
                </div> */}
                <div className="w-[100px]  bg-black items-center justify-center h-[50px] p-1">
                  <HashLink
                    className="hover:bg-slate-300 hover:text-black duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[17px]"
                    smooth
                    to="#projects"
                  >
                    Projects
                  </HashLink>
                </div>
                <div className="w-[100px]  bg-black items-center justify-center h-[50px] p-1">
                  <HashLink
                    className="hover:bg-slate-300 hover:text-black duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[17px]"
                    smooth
                    to="#coding"
                  >
                    Profiles
                  </HashLink>
                </div>
                
                
                <div className="w-[100px]  bg-black items-center justify-center h-[50px] p-1">
                  <HashLink
                    className="hover:bg-slate-300 hover:text-black duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[17px]"
                    smooth
                    to="#experience"
                  >
                    Experience
                  </HashLink>
                </div>
                <div className="w-[100px]  bg-black items-center justify-center h-[50px] p-1">
                  <HashLink
                    className="hover:bg-slate-300 hover:text-black duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[17px]"
                    smooth
                    to="#education"
                  >
                    Education
                  </HashLink>
                </div>
                <div className="w-[100px]  bg-black items-center justify-center h-[50px] p-1">
                  <HashLink
                    className="hover:bg-slate-300 hover:text-black duration-500 rounded-lg  w-full h-full flex items-center justify-center text-[17px]"
                    smooth
                    to="#connectme"
                  >
                    ConnectMe
                  </HashLink>
                </div>
              </div>
            </nav>
            <div>
              <section id="aboutMe" className="  mx-auto  w-[100%]">
                <div>
                  <div className=" mx-auto p-4">
                    <div className="flex flex-col items-center justify-center">
                      <div>
                        <img src={Img1} alt="Personal" className="mx-auto mb-2 " />
                      </div>
                      <div className="text-center">
                        <h1 className="text-4xl font-bold  name mb-[30px]">
                          HELLO, Riddhi Here
                        </h1>
                        <p
                          data-aos="fade-right"
                          className=" text-gray-700 text-2xl from-stone-600"
                        >
                          Welcome to my portfolio! I’m passionate about learning and exploring automation in software testing. Along with that, I have a strong grasp of core subjects like Data Structures & Algorithms, Database Management Systems, and Object-Oriented Programming. I’m always ready to learn and explore new technologies to keep growing in the tech world.<br/>
                          <a
  href="/Resume_Riddhi_Mistry.pdf"
  download
  className="inline-block mt-4 text-[16px] sm:text-[20px] md:text-[24px] font-semibold bg-white text-blue-800 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
>
  📄 Download Resume
</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>


 <section
              id="projects"
              className="  mt-[100px] mr-[0px] w-[100%] z-10"
            >
              <div
                data-aos="fade-right"
                className="  headingAll heading text-4xl w-fit m-auto p-4 font-bold mb-[60px] mt-[50px]"
              >
                Projects
              </div>
              <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-2 my-10 gap-9 ">
                <div
                  data-aos="flip-up"
                  className="sd w-fit text-center  mx-auto mb-[50px] rounded-lg"
                >
                  <div className="w-fit overflow-hidden duration-1000 ">
                    <img
                      src={p4}
                      className="w-[450px] h-[200px] hover:scale-125 duration-1000"
                      alt=""
                    />
                  </div>
                  <a href="https://github.com/Riddhi-1510/MuTAP_LLMs">
                    <RiGithubFill color="#181717" className="inline-block text-2xl" />{" "}
                    <h1 className="p-2 text-2xl underline ">MuTAP_LLMs</h1>
                  </a>
                </div>
                <div
                  data-aos="flip-up"
                  className="sd w-fit text-center rounded-lg mx-auto mb-[50px]"
                >
                  <div className="w-fit overflow-hidden duration-1000 ">
                    <img
                      src={p2}
                      className="w-[450px] h-[200px] hover:scale-125 duration-1000"
                      alt=""
                    />
                  </div>
                  <a href="https://github.com/Riddhi-1510/G17_StaffGrid">
                    <RiGithubFill color="#181717" className="inline-block text-2xl" />
                    <h1 className="p-2 text-2xl underline ">Staff Grid</h1>
                  </a>
                </div>
                 
                <div
                  data-aos="flip-up"
                  className="sd w-fit text-center rounded-lg mx-auto mb-[50px]"
                >
                  <div className="w-fit overflow-hidden duration-1000 ">
                    <img
                      src={p3}
                      className="w-[450px] h-[200px] hover:scale-125 duration-1000"
                      alt=""
                    />
                  </div>
                  <a href="https://github.com/Riddhi-1510/CanteenOrderingSystem">
                    <RiGithubFill color="#181717" className="inline-block text-2xl" />
                    <h1 className="p-2 text-2xl underline ">CanteenOrderingSystem</h1>
                  </a>
                </div>
              </div>
            </section>


            {/* <section
              id="skills"
              className="  mt-[100px] mr-[0px] w-[100%] z-10   "
            >
              <div
                data-aos="fade-right"
                className="  headingAll heading text-4xl w-fit m-auto p-4 font-bold mb-[60px] mt-[50px]"
              >
                Skills
              </div>
              <div
                data-aos="flip-up"
                className="headingh1 text-4xl  ml-[10%]  w-fit p-4 font-bold mb-[30px] mt-[20px]"
              >
                Languages
              </div>
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mx-auto w-fit ">
                <div
                  data-aos="zoom-in"
                  className="w-[140px] h-[60px] text-2xl box-border p-2  rounded-md border-solid border-2 border  bg-slate-100  duration-500"
                >
                  <i class="programming lang-cpp"></i> &nbsp;&nbsp;C++
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[140px] h-[60px] text-2xl  box-border box-border  p-2 rounded-md   border-solid border-2 border  bg-slate-100 hover:text-black duration-500 "
                >
                  <i class="programming lang-java "></i> Java
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[140px] h-[60px] text-2xl box-border p-2 rounded-md border-solid border-2 border bg-slate-100 duration-500"
                >
                  <i class="programming lang-python"></i> Python
                </div>

                <div
                  data-aos="zoom-in"
                  className=" w-[180px] h-[60px] text-2xl  box-border p-2 rounded-md  border-solid border-2 border  bg-slate-100 hover:text-black duration-500 "
                >
                  <i class="programming lang-javascript"></i>{" "}
                  <span className="text-2xl">&nbsp;&nbsp; JavaScrip</span>
                </div>
                
                <div
                  data-aos="zoom-in"
                  className=" w-[100px] h-[60px] text-2xl  box-border p-2 rounded-md  border-solid border-2 border  bg-slate-100 hover:text-black duration-500 "
                > 
                  <span className="text-2xl">&nbsp;&nbsp; SQL</span>
                </div>


                
              </div>

              <div
                data-aos="flip-up"
                className="headingh1 ml-[10%]  text-4xl w-fit p-4 font-bold mb-[30px] mt-[50px]"
              >
                WebTechnologies
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-[50px] mx-auto  w-fit">
                <div
                  data-aos="zoom-in"
                  className="w-[140px]  h-[60px] text-2xl   box-border p-2 rounded-md  border-solid border-2 border  bg-slate-100 hover:text-black duration-500 "
                >
                  <i class="programming lang-css text-1xl"></i> &nbsp;CSS
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[140px] h-[60px] text-2xl box-border p-2  rounded-md border-solid border-2 border  bg-slate-100   duration-500"
                >
                  <i class="programming lang-html"></i> &nbsp;&nbsp;HTML
                </div>
                
                <div
                  data-aos="zoom-in"
                  className="w-[140px] h-[60px] text-2xl    box-border p-2 rounded-md border-solid border-2 border bg-slate-100  hover:text-black duration-500 "
                >
                  <FaReact className="text-2xl text-blue-300 inline-block" />{" "}
                  <span className="text-2xl">&nbsp;&nbsp;React</span>
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[170px] h-[60px]    box-border p-2 rounded-md  border-solid border-2  bg-slate-100 hover:text-black duration-500 "
                >
                  <img
                    src={Tcss}
                    alt="Tailwind CSS"
                    className="w-[26px] mt-[2px] inline-block text-1xl"
                  />{" "}
                  <span className="text-2xl">tailwindcss</span>
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[170px] h-[60px] box-border  p-2 rounded-md  border-solid border-2 border bg-slate-100 hover:text-black duration-500"
                >
                  <DiNodejs color="#339933" className="inline-block text-5xl" />{" "}
                  <span className="text-2xl">Node.js</span>
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[140px] text-2xl   h-[60px]   box-border  p-2 rounded-md  border-solid border-2 border bg-slate-100 hover:text-black duration-500"
                >
                  <SiExpress color="#000000" className="inline-block text-1xl" />{" "}
                  <span className="text-2xl">Express</span>
                </div>
                
              </div>

              <div
                data-aos="flip-up"
                className="headingh1 text-4xl ml-[10%] w-fit p-4 font-bold mb-[30px] mt-[50px]"
              >
                DataBase
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-[50px] mx-auto w-fit">

                 <div
                  data-aos="zoom-in"
                  className="w-[170px] text-2xl   h-[60px] box-border  p-2 rounded-md  border-solid border-2 border   bg-slate-100 hover:text-black duration-500"
                >
                  <SiPostgresql color="#000000" className="inline-block text-2xl" />{" "}
                  PostgreSql 
                </div>

                <div
                  data-aos="zoom-in"
                  className="w-[160px] text-2xl   h-[60px]  box-border p-2 rounded-md  border-solid border-2 border bg-slate-100 hover:text-black duration-500"
                >
                  <SiMongodb color="#47A248" className="inline-block text-2xl" />{" "}
                  MongoDB
                </div>

              </div>

              <div
                data-aos="flip-up"
                className="headingh1 text-4xl ml-[10%] w-fit p-4 font-bold mb-[30px] mt-[50px]"
              >
                Tools
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-[50px] mx-auto w-fit">
                <div
                  data-aos="zoom-in"
                  className="w-[140px] text-2xl   h-[60px]  box-border   p-2 rounded-md  border-solid border-2 border  bg-slate-100 hover:text-black duration-500"
                >
                  <RiGithubFill color="#181717" className="inline-block text-2xl" />{" "}
                  GitHub
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[150px] text-2xl   h-[60px]  box-border   p-2 rounded-md  border-solid border-2 border bg-slate-100 hover:text-black duration-500"
                >
                  <SiPostman color="#FF6C37" className="inline-block text-2xl" />{" "}
                  Postman
                </div>
                <div
                  data-aos="zoom-in"
                  className="w-[170px] text-2xl   h-[60px] box-border  p-2 rounded-md  border-solid border-2 border   bg-slate-100 hover:text-black duration-500"
                >
                  <SiPostgresql color="#000000" className="inline-block text-2xl" />{" "}
                  PgAdmin 
                </div>
              </div>
            </section> */}

           




<section
  id="coding"
  className="mt-[100px] mr-[0px] w-[100%] z-10"
>
  <div
    data-aos="fade-right"
    className="headingAll heading text-4xl w-fit m-auto p-4 font-bold mb-[60px] mt-[50px]"
  >
    Coding Profiles
  </div>

  <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-3 my-10 gap-9">
    {/* LeetCode */}
    <div
      data-aos="flip-up"
      className="sd w-fit text-center mx-auto mb-[50px] rounded-lg"
    >
      <div className="w-fit overflow-hidden duration-1000">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/LeetCode_logo_black.png/320px-LeetCode_logo_black.png"
          className="w-[200px] h-[200px] object-contain p-6 hover:scale-125 duration-1000"
          alt="LeetCode"
        />
      </div>
      <a href="https://leetcode.com/u/Riddhi1510/" target="_blank" rel="noreferrer">
        <h1 className="p-2 text-2xl underline">LeetCode</h1>
      </a>
    </div>

    {/* Codeforces */}
    <div
      data-aos="flip-up"
      className="sd w-fit text-center mx-auto mb-[50px] rounded-lg"
    >
      <div className="w-fit overflow-hidden duration-1000">
        <img
          src="https://sta.codeforces.com/s/63349/images/codeforces-logo-with-telegram.png"
          className="w-[200px] h-[200px] object-contain p-6 hover:scale-125 duration-1000"
          alt="Codeforces"
        />
      </div>
      <a href="https://codeforces.com/problemset/status?my=on" target="_blank" rel="noreferrer">
        <h1 className="p-2 text-2xl underline">Codeforces</h1>
      </a>
    </div>

    {/* GeeksforGeeks */}
    <div
      data-aos="flip-up"
      className="sd w-fit text-center mx-auto mb-[50px] rounded-lg"
    >
      <div className="w-fit overflow-hidden duration-1000">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png"
          className="w-[200px] h-[200px] object-contain p-6 hover:scale-125 duration-1000"
          alt="GeeksforGeeks"
        />
      </div>
      <a href="https://www.geeksforgeeks.org/user/mistryriddhi1510/" target="_blank" rel="noreferrer">
        <h1 className="p-2 text-2xl underline">GeeksforGeeks</h1>
      </a>
    </div>
  </div>
</section>


 
<section
  id="experience"
  className=" mt-[100px]  w-[100%] z-10 "
>
  <div
    data-aos="fade-right"
    className="  headingAll heading text-4xl w-fit m-auto p-4 font-bold mb-[60px] mt-[50px]"
  >
    Experience
  </div>
  <div className="p-[50px] sm:p-[20px]">
    <VerticalTimeline lineColor="#242400" data-aos="fade">

      <VerticalTimelineElement 
        contentStyle={{ background: "#90C4FF", color: "black" }}
        iconStyle={{ background: "white", border: "2px solid black" }}
        icon={<MdWork />}
      >
        <h2 data-aos="fade" style={{ color: "#363636" }}>
          Summer Research Intern
        </h2>
        <p data-aos="fade" className="font-size">
          Dhirubhai Ambani University | Internship | May 2025 – July 2025
        </p>
      </VerticalTimelineElement>


      <VerticalTimelineElement 
        contentStyle={{ background: "#90C4FF", color: "black" }}
        iconStyle={{ background: "white", border: "2px solid black" }}
        icon={<MdWork />}
      >
        <h2 data-aos="fade" style={{ color: "#363636" }}>
          Webmaster IEEE IAS DAIICT 
        </h2>
        <p data-aos="fade"> 
        Worked on updating the official IAS DAIICT website with a focus on UI and responsiveness. | May 2024 – Present 
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement 
  contentStyle={{ background: "#90C4FF", color: "black" }}
  iconStyle={{ background: "white", border: "2px solid black" }}
  icon={<MdWork />}
>
  <h2 data-aos="fade" style={{ color: "#363636" }}>
    Event Coordinator – CSS Battle, iFest’23
  </h2>
  <p data-aos="fade">
    Coordinated and managed the CSS Battle event at iFest’23. Focused on problem making and organizing event. | 2023 | DA-IICT
  </p>
</VerticalTimelineElement>

    </VerticalTimeline>
  </div>
</section>




            <section
              id="education"
              className=" mt-[100px]  w-[100%] z-10 "
            >
              <div
                data-aos="fade-right"
                className="  headingAll heading text-4xl w-fit m-auto p-4 font-bold mb-[60px] mt-[50px]"
              >
                Education
              </div>
              <div className="p-[50px] sm:p-[20px]">
                <VerticalTimeline lineColor="#242400" data-aos="fade">
                  <VerticalTimelineElement 
                    contentStyle={{ background: "#90C4FF", color: "black" }}
                    iconStyle={{ background: "white", border: "2px solid black" }}
                    icon={<MdSchool />} 
                  >
                    <h2  data-aos="fade" style={{ color: "#363636" }}>
                      Dhirubhai Ambani Institute of Information and Communication
                      Technology
                    </h2>
                    <p data-aos="fade"  className="font-size">
                      Gandhinagar, Gujarat | 2022–2026 | Bachelor of Information and
                      Communication Technology
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement data-aos="fade" 
                    contentStyle={{ background: "#90C4FF", color: "black" }}
                    iconStyle={{ background: "white", border: "2px solid black" }}
                    icon={<FaSchool /> }
                  >
                    <h2 data-aos="fade"  style={{ color: "#363636" }}>Alembic Vidyalaya</h2>
                    <p data-aos="fade" >
                      Vadodara, Gujarat | 2007-2022 | Higher and Secondary Education
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </section>

            <section
              id="connectme"
              className=" mt-[100px] mr-[0px] w-[100%] z-10 "
            >
              

              <div
                data-aos="fade-right"
                className="  headingAll heading text-4xl w-fit m-auto p-4 font-bold mb-[60px] mt-[50px]"
              >
                Make Connection With Me
              </div>
              {/* className="mb-[60px] bg-slate-200 py-[50px] px-[20px] duration-1000 shadow-2xl font-bold w-fit border border-black mx-auto rounded text-center" */}
              <div
                data-aos="flip-up"
                className="mb-[60px] border border-black mx-auto text-wrap  w-[70%] p-[30px] lg:p-[50px] bg-[#0D68AB] rounded-lg shadow-2xl text-center font-bold"
              >
                <button
                  data-aos="fade"
                  className="shadow-1xl md:text-[30px] sm:text-[20px] mx-auto  text-[#88c3ed] rounded py-[10px] bg-transparent underline"
                >
                  <a href="https://mail.google.com">mistryriddhi1510 <br />@gmail.com </a>
                </button>

                <br />
                <br />
                <button
                  data-aos="fade"
                  className="shadow-1xl text-[16px] sm:text-[20px] md:text-[30px] mx-auto border rounded p-4 bg-[#90C4FF] text-black"
                >
                  <a href="https://mail.google.com">Send Me Connect Email</a>
                </button>
              </div>
            </section>

            <div className="mx-auto  mb-[0px] ">
              <div className="flex items-center  place-content-around ">
                <div className="text-[15px] mb-[20px] ">
                  <p className="text-blue-500 m-[10px] ">
                    @2024 Riddhi Mistry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </p>
                </div>
                <div className=" flex space-x-10">
                  <div className="text-right ">
                    <a href="https://www.linkedin.com/in/riddhi-mistry-1bba63251/"><FaLinkedin className="text-blue-600 text-2xl mb-[20px]" /></a>
                  </div>
                  <div className="text-right  ">
                  <a href="https://github.com/Riddhi-1510"> <FaGithub className="text-2xl mb-[20px]" /></a>
                  </div>
                </div>
              </div>
            </div>
         </div>
      }

    </div>
  );
}

export default App;
