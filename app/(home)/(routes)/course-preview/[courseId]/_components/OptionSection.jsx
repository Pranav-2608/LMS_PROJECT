import React from 'react'
import Image from 'next/image'

const OptionSection= () => {
    const optionsList = [
        {
           id:1,
           name:'Github',
           icon:'/github.png'
        },
        {
            id:2,
            name:'Demo',
            icon:'/image.png'
         },
         {
            id:3,
            name:'Youtube',
            icon:'/youtube.png'
         },
    ]
  return (
    <div className='flex items-center gap-3'>
        {
            optionsList.map((option,index)=>(
                <div key={index} className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer'>
                  <Image src={option.icon} width="40" height="40"/>
                  <p>{option.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default OptionSection