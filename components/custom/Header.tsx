import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
            <div className="mx-auto w-full max-w-6xl px-6 py-25 sm:py-32 flex flex-col items-center justify-center my-10 gap-4 text-center">

                    <h1 className='text-5xl sm:text-6xl font-bold my-3'>A better way to track your job application.</h1>
                    <p className='text-lg text-gray-500 my-2'>Capture, organize, and manage your job search in one place.</p>
                  <Link href={"/signup"}>  <Button className={"text-md font-bold h-10 px-6 py-4"}>Start For Free</Button></Link>
                  <small className='text-gray-700 text-sm'>Free forever. No credit card required.</small>

            </div>



    </header>
  )
}
