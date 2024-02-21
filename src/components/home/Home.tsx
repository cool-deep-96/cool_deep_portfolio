import homeimg from '../../assets/lotties/homeimg.json'
import Contact from '../contact/Contact';
import '../../index.css';
import Projects from '../projects/ProjectSection';
import { Player } from '@lottiefiles/react-lottie-player';
import download from '../../assets/lotties/download.json';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Home = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <>
            <div className='flex flex-col gap-20 '>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 lg:justify-around'>
                    <div className='self-center   md:order-2 lg:order-2 lg:px-2' data-aos='fade-right'>
                        <Player src={homeimg} className='md:h-4/6 md:w-5/6' autoplay loop />
                    </div>
                    <div className="text-3xl flex flex-col gap-10 items-center justify-center font-semibold md:order-1 lg:order-1 lg:py-12 " data-aos='fade-left'>
                        <div className=' flex flex-col gap-5  md:w-9/12 px-10'>
                            <p className='text-2xl  '>&#128075; Hii , I'm <span style={{ color: '#80B3FF' }}>Kuldeep Kumar</span></p>
                            <p className='' style={{ fontFamily: 'Permanent Marker' }}>FULLSTACK WEB DEVELOPER</p>
                            <p className='text-xl' style={{ fontFamily: 'Young Serif' }}>
                                I seek to push the limits of creativity to create high engaging, user freindly and memorabel interactive experience
                            </p>
                        </div>
                        <div className='flex gap-8 justify-center'>
                            <button className='text-lg px-3  flex items-center gap-2 bg-indigo-600 text-white rounded-md py-1'>Download CV<Player src={download} autoplay loop className='h-8 w-8'/></button>
                            <button className='text-lg px-3  flex items-center gap-2 bg-indigo-600 text-white rounded-md py-1'>Hire Me</button>
                        </div>
                    </div>
                </div>
                <Projects/>
                
                <Contact />
            </div>

        </>
    )
}

export default Home;