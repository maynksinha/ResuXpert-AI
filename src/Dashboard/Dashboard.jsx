import React, { useEffect } from 'react'
import Addresume from './components/Addresume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../services/GlobalApi';
import Resumecard from './components/Resumecard';
import { useState } from 'react';

const Dashboard = () => {

  const {user}=useUser();
  const[resumeList,setResumeList]=useState([]);
  useEffect(()=>{
    user&&GetResumeList()
  },[user])

  // use to get users resume list

  const GetResumeList = ()=>{
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress)
    .then(resp=>{
      // console.log(resp.data)
      setResumeList(resp.data.data);
    })
  }

  return (
    <div className='p-10 md:px-20 lg:px-32'>
    <h2 className='font-bold text-3xl'>My Resume</h2>
     <p>Start Creating Resume</p>
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5 '>
      <Addresume/>

      {resumeList.length>0&&resumeList.map((resume,index)=>( 
        <Resumecard  resume={resume} key={index}/>
        ))}

     </div>
    </div>
  )
}

export default Dashboard