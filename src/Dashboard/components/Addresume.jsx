import { Loader2, PlusSquare } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4} from 'uuid';
// import { title } from 'process'
import GlobalApi from './../../../services/GlobalApi'
// import { error } from 'console'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Addresume = () => {
    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setresumeTitle]=useState();
    const {user}=useUser();
    const[loading,setLoading] = useState(false);
    const navigation=useNavigate();

    const onBuild = async()=>{
        setLoading(true)
        const uuid = uuidv4();
        const data = {
            data:{
                title:resumeTitle,
                userEmail:user?.primaryEmailAddress?.emailAddress,

                resumeId:uuid,
                userName:user?.fullName
            }
        }
        console.log(data);


        GlobalApi.CreateResume(data).then(resp=>{
            console.log(resp.data.data.documentId);
            if(resp){
                setLoading(false);
                navigation("resume/"+resp.data.data.documentId+"/edit");
            }
            },(error)=>{
                setLoading(false)
        })
    }

    return (
        <div>

            <div className='p-14 py-24 border 
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed' onClick={()=>setOpenDialog(true)}>
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>
                {/* <DialogTrigger></DialogTrigger> */}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                        <span>Add Title For Your Resume</span>
                            <Input className='mt-2'placeholder="Ex.Full Stack Developer" onChange={(e)=>setresumeTitle(e.target.value)}
                                
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button variant = "ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                            <Button 
                            disabled={!resumeTitle || loading}
                             onClick={()=>onBuild()}>
                            
                            {loading? <Loader2 className='animate-spin'/> : 'Create'}
    
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


        </div>
    )
}

export default Addresume