"use client";
import { getCourseById } from '@/app/_services';
import React from 'react'
import { useEffect } from 'react';
import VideoPlayer from './_components/VideoPlayer';
import { useState } from 'react';
import CourseDetails from './_components/CourseDetails';
import OptionSection from './_components/OptionSection';
import EnrollmentSection from './_components/EnrollmentSection';
import { useUser } from '@clerk/nextjs';

function CoursePreview({params}){
    const[courseDetail,setCourseDetail] = useState([]);
    const[userCourse,setUserCourse] = useState([]);
    const{user} = useUser();
    useEffect(()=>{
        console.log(params.courseId);
        params.courseId?getCourse(params.courseId):null;
      },[user])

const getCourse = () => {
     getCourseById(params.courseId,user?.primaryEmailAddress?.emailAddress).then(res=>{
        console.log(res);
        setCourseDetail(res.courseList);
        setUserCourse(res?.userEnrollCourse[0])
     })
}

  return courseDetail?.name && (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 '>
        {courseDetail?.chapters?.[0] ? <VideoPlayer videoUrl={courseDetail?.chapters?.[0]?.video?.url} /> : null}
          <CourseDetails courseDetail={courseDetail}/>
        </div>
        <div className=' mt-5 md:mt-0'>
          <OptionSection className="p-5 "/>
          <EnrollmentSection courseDetail={courseDetail}/>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview