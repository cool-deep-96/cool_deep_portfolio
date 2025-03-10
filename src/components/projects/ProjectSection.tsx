import { Github, Preview } from "../icons/AllIcons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import HilightedBox from "../common/HilightedBox";
import { projects } from "../../data/projects";


interface projectType{
  name: string;
  github: string;
  deployment: string;
  imgSrc: string;
  description: string;
  Type: string;
  techStack: string[];
}

const ProjectSection = () => {
  const [filter, setFilter] = useState<string>('All');
  const [modified, setModified] = useState<projectType[]>([]);

  let type: string[] =['All', 'Collaborative','Fullstack', 'Frontend']


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  useEffect(()=>{
    if(projects.length>0){
      if(filter === 'All'){
        setModified(projects)
      } 
      else{
      const temp = projects.filter((projects)=>{
        return projects.Type === filter
      })
      setModified(temp);
    }
    }

  },[filter])
  return (

    <div className="flex flex-col justify-center items-center  mt-8 py-5">
      <HilightedBox>
        <div data-aos="fade-up" className="text-3xl font-mono font-bold mt-10  py-1 "> My Latest <span className="text-indigo-300">Projects</span></div>
        <div className="flex gap-2 md:gap-5 my-8" data-aos='fade-left'>

          {type.length>0 && 
            type.map((type, index)=>(
            <button key={index} className={`px-3 py-1  rounded-xl text-base font-semibold ${filter=== type? 'bg-indigo-700 text-white':'bg-slate-300 text-black'} transition-all duration-300`} onClick={()=>setFilter(type)}>{type}</button>
            ))
            
          }
        </div>
        <div className="flex flex-row flex-wrap gap-10 my-10 justify-center">
          {
            modified.map((project, index) => {
              return (

                <div className=" rounded-md" data-aos="zoom-in-down">
                  <div key={index} data-aos="zoom-in-down" className="  flex flex-col justify-center border border-green-400 gap-3 rounded-md  transformCustom ">
                    <div className={`relative h-72 w-96 border overflow-hidden border-indigo-900 rounded-lg`}>
                      <div className="group/img absolute  h-full w-full bg-slate-900 top-0 left-0 bg-opacity-70 rounded-lg ">
                        <img src={project.imgSrc} alt="Cover Photo" className=" absolute top-0 left-0 -z-10 h-full w-full bg-green-100 group-hover/img:scale-125 duration-500 rounded-lg" />
                        <div className="h-[80%] -translate-y-4 w-full gap-1 flex flex-col justify-center self-start">

                          <h1 className=" text-3xl font-mono font-rubil text-white  mx-4">{project.name}</h1>

                          <div className="group-hover/img:h-[45%] mx-4 h-0 transform overflow-hidden duration-500">{project.description}</div>

                          <div className=" justify-around flex mx-4 ">
                            <button onClick={() => window.open(project.github)} className="hover:scale-125 duration-200  ">
                              <Github />
                            </button>
                            <button onClick={() => window.open(project.deployment)} className="hover:scale-125 duration-200">
                              <Preview />
                            </button>
                          </div>
                        </div>
                        <div className="flex absolute bottom-3 gap-1 flex-wrap mx-2">

                          {

                            project?.techStack.map((tech, index) => {
                              return (
                                <div key={index} className="px-3 py-1 bg-orange-700 text-white tracking-wider font-semibold  rounded-xl text-xs  cursor-pointer">
                                  {tech}

                                </div>
                              )
                            })
                          }
                        </div>
                      </div>

                    </div>
                  </div>

                </div>


              )
            })
          }
        </div>
      </HilightedBox>
    </div>
  )
}

export default ProjectSection;
