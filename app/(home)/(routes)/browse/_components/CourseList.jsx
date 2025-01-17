import React from 'react'
import Image from 'next/image'
import { Book } from 'lucide-react'
import Link from 'next/link'

const CourseList = ({course}) => {
  return (
    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
       { course.map((item,index) => (
        <Link href={"/course-preview/"+item.id}>
          <div  key={index} className='border rounded-lg p-2 mt-2 cursor-pointer hover:border-purple-600'>
            <Image src={item?.banner?.url} alt={course?.name} width={1000} height={500} className='rounded-lg'/>
            <div >
                <h2 className='text-[18px] md:text-[16px] font-medium '>{item.name}</h2>
            </div>
            <div className='flex items-center gap-2'>
            <Book className='h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1'/>
            <h2 className='text-[12px] text-gray-400 '>{item.totalChapters}</h2>
            </div>
            <h2 className='mt-2 text-[14px]'>{item.free?'Free':'Paid'}</h2>
          </div>
          </Link> 
        ))
       }
    </div>
  )
}

export default CourseList