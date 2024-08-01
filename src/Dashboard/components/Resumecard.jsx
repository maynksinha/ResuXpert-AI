import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Resumecard = ({resume}) => {
  return (
    <Link to={"resume/"+resume.documentId+"/edit"}>
    {/* <div className='p-14 bg-gradient-to-b flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary gap-5'>
     */}
     <div className='p-14  bg-gradient-to-b
          from-red-200 via-purple-200 to-blue-200
        h-[280px] 
          rounded-t-lg border-t-4 hover:scale-105 transition-all hover:shadow-md shadow-primary gap-5
        '
        style={{
          borderColor:resume?.themeColor
        }}
        >
        {/* <Notebook/> */}
        <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/cv.png" width={80} height={80} />
              </div>

        </div>
        <h2 className='text-center my-2'>{resume.title}</h2>
        </Link>
  )
}

export default Resumecard