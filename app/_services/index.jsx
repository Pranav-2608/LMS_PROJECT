import { gql } from "graphql-request";

import request from "graphql-request"

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwjj2s9i02ap07w9g9qtn29l/master"

export const getCourseList=async ()=>{
   const query = gql`
   query CourseList {
    courseLists{
      name
      banner{
       url
     }
     free
     id
     totalChapters
     tags
   }
 }
 `
 const result = await request(MASTER_URL,query);
 return result;
}

export const getCourseById= async(id,email)=>{
   const query = gql`
   query Course {
    courseList(where: {id:"`+id+`"}) {
      chapters {
        ... on Chapter {
          id
          name
          video {
            url
          }
          youtubeUrl
        }
      }
      description
      free
      id
      name
      totalChapters
    }

    userEnrollCourses(where: {courseId: "`+id+`", email: "`+email+`", completedChapter: ""}) {
      courseId
      email
      completedChapter
    }
  }`
  const result = await request(MASTER_URL,query);
 return result;
}

export const EnrollCourse = async (courseId,email) =>{
     const mutationQuery = gql`
     mutation EnrollCourse {
      createUserEnrollCourse(data: {email: "`+email+`", courseId: "`+courseId+`"}) {
        id
      }
    }
     `
    const result = await request(MASTER_URL,mutationQuery);
    return result;
}

export const publishCourse = async(id)=>{
  const mutationQuery = gql`
  mutation EnrollCourse {
    publishUserEnrollCourse(where: {id: "`+id+`"}) {
      id
    }
  }
  
  `
  const result = await request(MASTER_URL,mutationQuery);
    return result;
}