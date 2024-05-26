import { EnrollCourse, publishCourse } from '@/app/_services'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React from 'react'

const EnrollmentSection = ({courseDetail,userCourse}) => {
    const { user } = useUser();
    const router = useRouter();
    const enrollCourse = async()=>{
        if(user){
        await EnrollCourse(courseDetail.id,user.primaryEmailAddress.emailAddress).then(async (res) => {
            console.log(res);
            if(res){
                await publishCourse(res?.userCourse?.id).then(
                    result=>console.log(result)
                )
            }
        })
        }
        else{
           router.push('/sign-in');
        }
    }
  return (
    <div>
    {userCourse?.courseId ? (
        <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>Continue to Build projects,Access Source Code and Track your Progress</h2>
            <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 
            '
            >Continue</button>
        </div>
    ):null}

    {courseDetail.free && !userCourse?.courseId ? (
        <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>Learn and Build projects,Access Source Code and Track your Progress</h2>
            <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 
            '
            onClick={() => enrollCourse()}
            >Enroll Now</button>
        </div>
    ): !userCourse?.courseId? (
        <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>Buy This Course,Source Code and track your progress</h2>
            <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 '>
              Buy Course for $1.99
            </button>
        </div>
    ):null}
    <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>Buy monthly Membership and get access to all course Source Code and track your progress</h2>
            <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 '>
              Buy Membership for $4.99/month
            </button>
        </div>
    </div>
  )
}

export default EnrollmentSection