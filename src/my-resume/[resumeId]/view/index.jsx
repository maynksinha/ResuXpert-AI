import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/Dashboard/resume/component/ResumePreview'
import React, { useState } from 'react'

const ViewResume = () => {
const[resumeInfo,setResumeInfo]=useState()
  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>

    <Header/>
    
    <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
    <h2 className='text-center text-2xl font-medium'>Congrats! Your resume is ready</h2>
    <p className='text-center text-gray-400'>Ready to Download Your Resume</p>
       <div className='flex justify-between px-44 my-10'>
        <Button>Download</Button>
        <Button>Share</Button>
       </div>
       <div>
        <ResumePreview/>
       </div>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default ViewResume