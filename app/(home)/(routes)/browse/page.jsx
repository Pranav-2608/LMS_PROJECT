"use client";
import React, { useEffect, useCallback,useState } from 'react';
import CategoryFilter from '../../_components/CategoryFilter';
import { getCourseList } from '@/app/_services';
import CourseList from './_components/CourseList';

const Browse = () => {
  const [course,setCourse] = useState([]);
  const getCourses = useCallback(() => {
    getCourseList()
      .then((res) => {
        setCourse(res.courseLists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return (
    <div className='p-5'>
      <CategoryFilter />
      {course?<CourseList course={course}/>:null}
    </div>
  );
};

export default Browse;
