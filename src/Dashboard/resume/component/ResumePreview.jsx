import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import Personaldetails from './preview/Personaldetails'
import SummeryPreview from './preview/Summery'
import ExperiencePreview from './preview/Experience'
import EducationalPreview from './preview/Education'
import SkillsPreview from './preview/Skills'

const ResumePreview = () => {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'>
    <Personaldetails resumeInfo={resumeInfo}/>
    <SummeryPreview resumeInfo={resumeInfo}/>
    <EducationalPreview resumeInfo={resumeInfo}/>
    <ExperiencePreview resumeInfo={resumeInfo}/>
    <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview