"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function AppView() {
    const [img ,setImg] =  useState(1)
    return (
    <div className='mx-auto max-w-7xl w-full px-6 text-center py-30'>
        
        <div className="flex gap-4 justify-center items-center my-6">

            <Button onClick={()=> setImg(1)}>Organize Applications</Button>
            <Button onClick={()=> setImg(2)}>Get Hired</Button>
            <Button onClick={()=> setImg(3)}>Manage Dashboards</Button>
        </div>
{img == 1 &&
        <Image src={"/image1.jpg"} alt='Organize Applications' width={1300} height={700} className='border rounded-xl border-gray-300' />
}
{img == 2 &&
        <Image src={"/image2.jpg"} alt='Organize Applications' width={1300} height={700} className='border rounded-xl border-gray-300'/>
}
{img == 3 &&
        <Image src={"/image3.jpg"} alt='Organize Applications' width={1300} height={700} className='border rounded-xl border-gray-300'/>
}

    </div>
  )
}
