import letter from '../../assets/Images/letter.png'
import phonecall from '../../assets/Images/phonecall.png'
import instagram from '../../assets/Images/instagram.png'
import linkedin from '../../assets/Images/linkedin.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MyContact = [
    {
        name: "Instagram",
        src: instagram,
        link: "https://instagram.com/cool_deep_96?igshid=NTc4MTIwNjQ2YQ=="

    },
    {
        name: "LinkedIn",
        src: linkedin,
        link: "https://www.linkedin.com/in/cool-deep96/"

    },
    {
        name: "GitHub",
        src: instagram,
        link: "https://instagram.com/cool_deep_96?igshid=NTc4MTIwNjQ2YQ=="

    },
    {
        name: "Instagram",
        src: instagram,
        link: "https://instagram.com/cool_deep_96?igshid=NTc4MTIwNjQ2YQ=="

    }
]

const Contact = () => {

    useEffect(()=>{
        AOS.init()

    },[])
    return (
        <>
            <div data-aos="fade-left">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-3xl font-mono font-bold mt-10 px-2 py-1 "> Contact Details</div>
                </div>

                <div className='lg:grid lg:grid-cols-2 lg:py-10 lg:px-40 shadow-outline'>

                    <div className='p-5 md:p-10 bg-indigo-200  object-contain order-2 rounded-lg border-opacity-80 shadow-xl '>
                        <p className='text-4xl font-semibold text-center py-10 pb-16 lg:py-0 lg:pb-10'>Contact Form</p>
                        <div >
                            <form >
                                <div className='flex gap-5 justify-start  content-fit'>
                                    <div className='w-5/6'>
                                        <label className='lg:text-lg text-lg block'>Name</label>
                                        <input type='text'
                                            className='lg:text-base text-lg rounded-lg border-solid border-indigo-400 border-2  w-full p-3 mb-3  bg-indigo-100 border-opacity-80 shadow-lg focus:outline-none focus:border-indigo-600'
                                            placeholder='Your Name'
                                        />
                                    </div>
                                    <div className='w-5/6'>
                                        <label className='lg:text-lg  text-base block'>Mobile Number</label>
                                        <input type='number'
                                            className='lg:text-base text-lg rounded-lg border-solid border-indigo-400 border-2 w-full p-3 mb-3 bg-indigo-100 border-opacity-80 shadow-lg focus:outline-none focus:border-indigo-600'
                                            placeholder='Your Mob. Number'
                                            pattern="[0-9]{10}"
                                        />
                                    </div>
                                </div>

                                <label className='lg:text-lg text-lg block pt-4'>Email</label>
                                <input type='text'
                                    className=' lg:text-base  text-lg rounded-lg border-solid border-indigo-400 border-2 w-full p-3 mb-3 bg-indigo-100 border-opacity-80 shadow-lg focus:outline-none focus:border-indigo-600'
                                    placeholder='Your Email'
                                />

                                <label className='lg:text-lg text-lg block pt-4'>Subject</label>
                                <input type='text'
                                    className='lg:text-base  text-lg rounded-lg border-solid border-indigo-400 border-2 p-3 w-full mb-3 bg-indigo-100 border-opacity-80 shadow-lg focus:outline-none focus:border-indigo-600'
                                    placeholder='Subject'
                                />


                                <div className='flex justify-center '>

                                    <div className=' w-5/6'>
                                        <label className='lg:text-lg text-xl block pt-4'>Message</label>
                                        <textarea className='lg:text-base text-xl rounded-lg border-solid border-indigo-400 border-2 p-3 h-40 w-full bg-indigo-100 border-opacity-80 shadow-lg focus:outline-none focus:border-indigo-600' >
                                            Type Your Thoughts here...
                                        </textarea>
                                    </div>

                                </div>


                            </form>
                        </div>
                    </div>
                    <div className='flex flex-col  justify-evenly place-items-end order-1  '>
                        <div className='w-full overflow-hidden'>
                            <div className='  lg:relative lg:left-3/4 lg:w-full lg:hover:left-0 lg:duration-300 lg:ease-linear '>
                                <div className=' px-8 bg-indigo-100 md:px-48 lg:px-8 lg:rounded-xl lg:rounded-r-none lg:border-solid lg:border-2 lg:border-r-0 lg:border-indigo-700'>
                                    <p className='text-3xl md:text-4xl text-center py-10 '>Get In Touch With Me</p>
                                    <div className='flex gap-4  py-3' >
                                        <img className='h-8 w-8' src={letter} alt='email' />
                                        <a href='mailto: 27581kuldeep.2021cse@gmail.com'> 27581kuldeep.2021cse@gmail.com</a>
                                    </div>
                                    <div className='flex gap-4 py-3'>
                                        <img className='h-8 w-8' src={phonecall} alt='phone' />
                                        <a href=" tel:+91 8581952029" className=''>+91 8581952029</a>
                                    </div>
                                    <div>
                                        <p className='text-lg py-3'>Follow Me:</p>
                                        <div className='flex flex-row gap-6 justify-center p-5'>

                                            {
                                                MyContact.map((contact) => {
                                                    return (
                                                        <img className="h-8 w-8 grayscale hover:grayscale-0 transition duration-1000 hover:cursor-pointer"
                                                            onClick={() => { window.open(contact.link) }}
                                                            src={contact.src}
                                                            alt={contact.name} />

                                                    )
                                                })
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact;