import React from 'react';
import node from '../../assets/Images/techstack/nodejs.png'

const Techstack = ()=>{
    return(
        <>
        <div>
            <div className='lg:p-16 lg:pl-64 lg:md:p-10 p-10'>
                <p className='text-4xl text-center font-bold leading-loose md:text-left'>My Tech Stack</p>
                <p className='text-xl font-semibold leading-loose'>Technologies I've been working with recently</p>
            </div>

            <div className= 'lg:px-64 px-30'>
                <div className='grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-4 justify-center'>
                    <div className=' p-3 lg:p-7 justify-center flex'>
                        <img src={node} className='h-20 w-20 hover:scale-110'/>
                    </div>
                    <div className='p-3 lg:p-7 justify-center  flex '>
                        <img src={node} className='h-20 w-20 hover:scale-110'/>
                    </div>
                    <div className='p-3 lg:p-7 justify-center  flex'>
                        <img src={node} className='h-20 w-20 hover:scale-110'/>
                    </div>
                    <div className='p-3 lg:p-7 justify-center  flex'>
                        <img src={node} className='h-20 w-20 hover:scale-110'/>
                    </div>
                    <div className='p-3 lg:p-7 justify-center  flex'>
                        <img src={node} className='h-20 w-20 hover:scale-110'/>
                    </div>
                    <div className='p-3 lg:p-7 justify-center  flex'>
                        <img src={node} className='h-20 w-20 hover:scale-110'/>
                    </div>

                </div>
            </div>
            


        </div>
        

        
        </>
    )
}

export default Techstack;