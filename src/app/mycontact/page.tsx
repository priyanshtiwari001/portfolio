import Link from 'next/link';
import React from 'react'
import MyStack from '@/components/myStack';
import GridGlobe from '@/components/grid-globe';
import { cn } from '@/utils/cn';
const ContactPage = () => {
  return (
   
    <section className='flex flex-col grow   '>
      <h1 className='text-3xl my-10 hidden lg:block '>Let&apos;s connect</h1>

      <div  className='h-[300px] flex flex-col gap-2 w-full lg:w-[95%] lg:mx-auto lg:h-full  p-3'>
    <div className='basis-1/2  border border-zinc-900 rounded-3xl'>
      <BoxData title='Email' desc='priyanshu108tiwari' i='1' />
    </div>
    <div className='basis-1/2 border border-zinc-900 rounded-3xl'>
    <BoxData title='Phone' desc='+91 925 455 2853'  />
    </div>
      </div>
      <div className="pl-3 pt-3  lg:h-[250px] h-[320px]    flex flex-col lg:flex-row rounded-3xl  gap-3 lg:m-6  lg:mt-0">
        <div
          
          id="box-1"
          className=" border basis-1/2 rounded-3xl bg-blue-800"
        >
          <MyStack />
        </div>
        <div id="box-2" className="border-2 basis-1/2 w-full h-full  rounded-3xl">
       <GridGlobe/>
        </div>
      </div>

    </section>
  )
}

export default ContactPage;


const BoxData = ({title,desc,i}:{title:string;desc:string;i?:string;})=>{
  return(
    <div className='p-4 flex flex-col items-start justify-center gap-5 lg:gap-8 bg-zinc-800 w-full h-full rounded-3xl'>
      <div className='text-lg lg:text-xl'>{title}</div>
      <Link rel="noopener" target='_blank' href={cn(i=='1' ? 'mailTo:priyanshu108tiwari@gmail.com' :'tel:+919254552853')} className='text-2xl lg:text-4xl text-gray-300 hover:text-white'>{desc}</Link>
    </div>
  )
}
