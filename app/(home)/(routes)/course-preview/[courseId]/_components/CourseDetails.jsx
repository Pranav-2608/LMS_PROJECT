import React from 'react'
import { Book } from 'lucide-react'

const CourseDetails = ({courseDetail}) => {
  return (
    <div className='mt-5 p-5 rounded-lg border border-black'>
      <h2 className='text-[20px] font-medium'>{courseDetail.name}</h2>  
      <div className='flex items-center gap-2 border'>
            <Book className='h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1'/>
            <h2 className='text-[12px] text-gray-400 '>{courseDetail.totalChapters}</h2>
      </div>
      <p className='line-clamp-4 mt-5 text-gray-400'>{courseDetail.description}</p>
    </div>
  )
}

export default CourseDetails