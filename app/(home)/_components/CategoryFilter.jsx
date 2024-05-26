
"use client";
import React, { useState } from 'react'

const CategoryFilter = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const filterOptions = [
        {
            id:1,
            name:'All',
            value:'all'
        },
        {
            id:2,
            name:'React JS',
            value:'reactjs'
        },
        {
            id:3,
            name:'All',
            value:'all'
        },
        {
            id:4,
            name:'Tailwind CSS',
            value:'tailwindcss'
        },
        {
            id:5,
            name:'Firebase',
            value:'firebase'
        },
    ]
  return (
    <div className='flex gap-5 border'>
        {
            filterOptions.map((item,index)=>(
                <button onClick={()=>setActiveIndex(index)}
                 className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 hover:bg-gray-50 font-semibold
                ${activeIndex == index ? 'border-purple-800 bg-purple-50 text-purple-800':null}`} key={index}>
                    <h2>{item?.name}</h2>
                </button>
            ))
        }
    </div>
  )
}

export default CategoryFilter