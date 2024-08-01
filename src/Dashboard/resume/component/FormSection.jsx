import React, { useState } from 'react'
import FormPesonaldetails from './forms/FormPesonaldetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import FormSummery from './forms/FormSummery'
import FormExperience from './forms/FormExperience'
import FormEducation from './forms/FormEducation'
import FormSkill from './forms/FormSkill'
// import ViewResume from '@/my-resume/[resumeId]/view'
import { Navigate, useParams } from 'react-router-dom'

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext,setEnabledNext] = useState(false)
  const {resumeId} = useParams()
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant='outline' size='sm' className='flex gap-2'><LayoutGrid />Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1
            && <Button size='sm' onClick={() => setActiveFormIndex(activeFormIndex - 1)}>

              <ArrowLeft /></Button>}

          <Button disabled={!enabledNext} className='flex gap-2' size='sm'
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}>
            Next<ArrowRight /></Button>
        </div>
      </div>

      {/* Personal Details */}
      {activeFormIndex==1?<FormPesonaldetails enabledNext={(v)=>setEnabledNext(v)}/>
      :activeFormIndex==2?<FormSummery enabledNext={(v)=>setEnabledNext(v)}/>
      :activeFormIndex==3?<FormExperience/>
      :activeFormIndex==4?<FormEducation/>
      :activeFormIndex==5?<FormSkill/>:
      activeFormIndex==6?<Navigate to={'/myresume/'+resumeId+'/view'}/>:null}
    </div>
  )
}

export default FormSection