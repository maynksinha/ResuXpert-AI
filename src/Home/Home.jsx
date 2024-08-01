import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div>
      {/* <Header/> */}
      <div>
      {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} /> */}
      {/* <Header/> */}
     <section className=" z-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Build Your Resume <span className='text-primary'>With ResuXpert-AI</span> </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Seamlessly Craft a Remarkable Resume with Our Innovative Builder</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center shadow-xl  text-white rounded-lg bg-primary  hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
           
            
        </div> 
    </div>
</section>
<section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
<h2 className="font-bold text-3xl">How it Works?</h2>
<h2 className="text-md text-gray-500">Start Building Your Resume in three simple steps</h2>

<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Write promot for your form</h2>

        <p className="mt-1 text-sm text-gray-600">
        Utilize our advanced tool, featuring a built-in AI generator, to complete your resume with ease and precision. This intelligent system assists you in filling out your resume more efficiently, ensuring all your skills and experiences are highlighted effectively for a polished, professional result.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Edit Your form </h2>

        <p className="mt-1 text-sm text-gray-600">
        We also offer an easy editing feature, allowing you to make quick and hassle-free adjustments to your resume as needed. This ensures that you can update and refine your document with ease, maintaining its relevance and professionalism effortlessly.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Share2 className='h-8 w-8' />

        <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>

        <p className="mt-1 text-sm text-gray-600">
        Download and share your resume effortlessly with our user-friendly feature. Save your document in multiple formats and quickly distribute it to potential employers or contacts, facilitating smooth networking and job applications.
        </p>
      </a>

    
    </div>

    
    </section>
  </div>
 
    </div>
  )
}

export default Home