import { Github } from "../icons/AllIcons";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


const projects = [
  {
    name: "Stopwatch",
    github: "https://github.com/cool-deep-96/StopWatch_Reactjs.git",
    deployment: "https://stop-watch-reactjs.vercel.app/",
    imgSrc: "/assets/Images/stopwatch.png",
    description: "",
    Type: "",
    techStack: ["tailwindcss", "ReactJs"]
  },
  {
    name: "Music Player",
    github: "https://github.com/cool-deep-96/MusicPlayer_NextJs_Sanity.git",
    deployment: "https://music-player-next-js-sanity-96.vercel.app/",
    imgSrc: "/assets/Images/musicplayer.png",
    description: "",
    Type: "",
    techStack: ["nextjs", "typescript", "sanity-io", "tailwindcss"]

  },
  {
    name: "BondSphere",
    github: "https://github.com/cool-deep-96/Bond_Sphere_Frontend.git",
    deployment: "",
    imgSrc: "",
    description: "",
    Type: "",
    techStack: ["reactjs", "javascript", "nodejs", "expressjs", "mongodb"]
  },
  {
    name: "Sync Player",
    github: "https://github.com/cool-deep-96/SyncPlayerFrontend.git",
    deployment: "https://sync-player-96.vercel.app/",
    imgSrc: "/assets/Images/syncplayer.png",
    description: "",
    Type: "",
    techStack: ["nextjs", "typescript", "tailwindcss", "socket.io", "expressjs", "aws"]
  }
]

const ProjectSection = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
},[])
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl font-mono font-bold mt-10 px-2 py-1 "> Projects</div>
      <div className="flex flex-row flex-wrap gap-10 my-10 justify-center">
        {
          projects.map((project, index) => {
            return (
              <div key={index} data-aos="zoom-in-down"  className="py-5 px-2  flex flex-col justify-center border gap-3 rounded-md  duration-500 bg-gradient-to-tr from-indigo-900 to-indigo-100">

                <div className={`relative h-72 w-96 border overflow-hidden bg-[url('${project.imgSrc}')]`}>
                  {/* <img src={project.imgSrc} alt="Cover Photo" className="h-full w-full bg-green-100 hover:scale-110  duration-500 " /> */}
                  <div className="absolute  w-full bg-red-300 top-0 left-0 bg-opacity-15">
                   <h1 className=" text-3xl font-mono font-semibold text-white ">{project.name}</h1>
                  </div>
                  
                </div>

                <div className="flex justify-around">
                  <button onClick={() => window.open(project.github)} className="hover:scale-125 duration-200">
                    <Github />
                  </button>
                  <button onClick={() => window.open(project.deployment)} className="hover:scale-125 duration-200">
                    <Github />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectSection;
