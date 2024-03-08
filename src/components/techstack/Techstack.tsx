"use client"

import { useEffect } from "react"
import { TechStackData } from "../../data/skill"
import AOS from 'aos';
import 'aos/dist/aos.css';



// interface TechType{
//     Name: string,
//     Side: string,
//     Img: string

// }

const Techstack = ()=>{

    useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])

    // const [ind, setInd] = useState<number>(1);
    // const [trimmedArray, setTrimmedArray]= useState<TechType[]>([]);
    // let page:number = TechStackData.length/5 || 0;

    // useEffect(()=>{
    //     const toupdate = TechStackData.slice((ind-1)*5, ind*5);
    //     setTrimmedArray(toupdate);
    // },[ind])


    // const drag = (e:any) => {


    //     const handleMouseMove = (event:any) => {
        

    //         e.target.style.left = `${event.clientX}px`;
    //         e.target.style.top = `${event.clientY}px`;
    //     };

    //     const handleMouseUp = () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
          
    //     };
    //     document.addEventListener('mousemove', handleMouseMove);
    //     document.addEventListener('mouseup', handleMouseUp);
    // };

    return(
        <div className="mt-[80px]" >
            <div className='classname flex flex-col items-center' data-aos="fade-up">
                <p className='text-4xl text-center font-bold leading-loose md:text-left'>My <span className="text-indigo-300">Tech Stack</span></p>
                <p className='text-xl font-semibold leading-loose'>Technologies I've been working with recently</p>
            </div>
            

            <div className="flex flex-wrap gap-5 gap-y-10 justify-center lg:mx-36 md:mx-14 mx-5 py-4 ">
            {
                
                TechStackData.map((tech, index)=>(
                    <div data-aos="zoom-in-down" className={`index w-40 flex flex-col items-center border ${tech.color[0]} rounded-xl bg-transparent p-3 overflow-hidden`} key={index}>
                        <div  className="h-20 w-20 relative bg-transparent flex items-center">
                        <div className={`h-0 w-0  absolute  rounded-full top-[50%] left-[50%] shadow-[0px_0px_55px_30px] ${tech.color[1]}`}></div>
                            <img src={tech.Img} className="w-full p-2 z-[1]"/>
                        </div>
                        <div>
                            <div className="text-center ">{tech.Name}</div>
                            <div className="text-center text-sm">{tech.Side}</div>
                        </div>

                    </div>
                ))
            }
            </div>

            {/* <div className="flex justify-center gap-10 mt-[100px]">

                { 
                    [...Array(4)].map((_,index)=>(
                        <button key={index} className={`bg-red-400 rounded-md p-5 ${index+1==ind? 'bg-gray-600':''}`} onClick={()=>{setInd(index+1)}}>{index+1}</button>
                    ))
                }
                
            </div> */}

            


        </div>
    )
}

export default Techstack;