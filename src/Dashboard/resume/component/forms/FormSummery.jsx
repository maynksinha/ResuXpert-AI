// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'
// import { ResumeInfoContext } from '@/context/ResumeInfoContext'
// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import GlobalApi from './../../../../../services/GlobalApi'
// import { Brain, LoaderCircle } from 'lucide-react'
// import { toast } from 'sonner'
// import { AIchatSession } from './../../../../../services/AImodel'


// const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"

// const FormSummery = (enabledNext) => {
//     const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
//     const [summery, setSummery] = useState()
//     const [loading, setLoading] = useState(false)
//     const params = useParams()
//     const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState();
    

//     const onSave = (e) => {
//         e.preventDefault();
//         setLoading(true)

//         const data = {
//             data: {
//                 summery: summery
//             }
//         }
//         GlobalApi.UpdateResumeDetails(params?.resumeId, data)
//             .then(resp => {
//                 console.log(resp);
//                 enabledNext(true)
//                 setLoading(false)
//                 toast("Details Updated.")
//             }, (error) => {
//                 setLoading(false)

//             })

//     }

//     useEffect(() => {
//         summery && setResumeInfo({
//             ...resumeInfo,
//             summery: summery
//         })
//     }, [summery])

//     const GenerateSummery=async()=>{
//         setLoading(true)
//         const PROMPT=prompt.replace('{jobTitle}',resumeInfo?.jobTitle) 
//         console.log(PROMPT)
//         const result = await AIchatSession.sendMessage(PROMPT)
//         console.log(result.response.text());
//         setAiGenerateSummeryList(JSON.parse([result.response.text()]))
//         setLoading(false)
//     }





//     return (
//         <div>
//             <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>

//                 <h2 className='font-bold text-lg'>Summery</h2>
//                 <p>Add Summery For Your Job</p>
//                 <form className='mt-7' onSubmit={onSave}>
//                     <div className='flex justify-between items-end '>
//                         <label>Add Summery</label>
//                         <Button type='button' variant='outline' size='sm' className='border-primary text-primary flex gap-2' 
//                         onClick={()=>GenerateSummery()}>
//                         <Brain className='h-4 w-4'/>Generate From AI</Button>
//                     </div>
//                     <Textarea className='mt-5'
//                         value={summery}
//                         defaultValue={summery?summery:resumeInfo?.summery}
//                         onChange={(e) => setSummery(e.target.value)}
//                     />
//                     <div className='mt-3 flex justify-end'>
//                         <Button type='submit'
//                             disabled={loading}>
//                             {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
//                         </Button>
//                     </div>
//                 </form>
//             </div>

//             {aiGeneratedSummeryList&& <div className='my-5'>
//             <h2 className='font-bold text-lg'>Suggestions</h2>
//             {aiGeneratedSummeryList?.map((item,index)=>(
//                 <div key={index} 
//                 onClick={()=>setSummery(item?.summary)}
//                 className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
//                     <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
//                     <p>{item?.summary}</p>
//                 </div>
//             ))}
//             </div>}
//         </div>
//     )
// }

// export default FormSummery

import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../../services/GlobalApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIchatSession } from './../../../../../services/AImodel';

const prompt = "Job Title: {jobTitle}, Depends on job title give me list of summery for 3 experience level, Mid Level and Freasher level in 3-4 lines in array format, With summery and experience_level Field in JSON Format";

const FormSummery = ({ enabledNext }) => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summery, setSummery] = useState(resumeInfo?.summery || '');
    const [loading, setLoading] = useState(false);
    const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([]);
    const params = useParams();
    const isInitialRender = useRef(true);

    const onSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            data: { summery }
        };

        try {
            const resp = await GlobalApi.UpdateResumeDetails(params?.resumeId, data);
            console.log(resp);
            enabledNext(true);
            toast("Details Updated.");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }

        if (resumeInfo.summery !== summery) {
            setResumeInfo({
                ...resumeInfo,
                summery
            });
        }
    }, [summery, resumeInfo, setResumeInfo]);

    const GenerateSummery = async () => {
        setLoading(true);
        try {
            const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
            console.log(PROMPT);
            const result = await AIchatSession.sendMessage(PROMPT);
            const responseText = await result.response.text();
            setAiGenerateSummeryList(JSON.parse(responseText));
        } catch (error) {
            console.error(error);
            toast("Error generating summary");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Summery</h2>
                <p>Add Summery For Your Job</p>
                <form className="mt-7" onSubmit={onSave}>
                    <div className="flex justify-between items-end">
                        <label htmlFor="summery">Add Summery</label>
                        <Button type="button" variant="outline" size="sm" className="border-primary text-primary flex gap-2" onClick={GenerateSummery}>
                            <Brain className="h-4 w-4" />Generate From AI
                        </Button>
                    </div>
                    <Textarea
                        id="summery"
                        className="mt-5"
                        value={summery}
                        defaultValue={resumeInfo?.summery}
                        onChange={(e) => setSummery(e.target.value)}
                    />
                    <div className="mt-3 flex justify-end">
                        <Button type="submit" disabled={loading}>
                            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>

            {aiGeneratedSummeryList && aiGeneratedSummeryList.length > 0 && (
                <div className="my-5">
                    <h2 className="font-bold text-lg">Suggestions</h2>
                    {aiGeneratedSummeryList.map((item, index) => (
                        <div key={index} onClick={() => setSummery(item?.summary)} className="p-5 shadow-lg my-4 rounded-lg cursor-pointer">
                            <h2 className="font-bold my-1 text-primary">Level: {item?.experience_level}</h2>
                            <p>{item?.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FormSummery;
