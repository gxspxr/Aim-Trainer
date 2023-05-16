import React from 'react'
import Content from './Content'
import { FaReact } from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const Main = () => {
  return (
    <main className='h-screen w-screen bg-base overflow-x-hidden'>
      <h1 className='text-white text-lg'><span className=' text-cyan-500 text-lg'>{"<"}</span>gaspar<span className='text-cyan-500 text-lg'>{"/>"}</span></h1>

   <section className=' select-none flex justify-center align-middle mt-[1em]'><Content /></section>
   {/* luego de esto va el footer, texto: "Made with ♥ and react" bg-secondary */}
    <footer className='flex gap-3 justify-center align-middle bg-base text-white text-lg mt-[7em]'>
      <div className='flex gap-3 justify-center align-middle bg-base text-white text-lg mt-[5em]'>
      Made with <span className='text-red-500'>♥</span>and<span className='ml-[0.5em] text-blue-500'><FaReact/></span>by Gaspar
      </div>
      {/* poner el linkedin y github al final del footer */}
      <div className=' flex justify-center align-middle ml-[30em] bg-base text-white text-lg mt-[5em]'>
      <a href="https://www.linkedin.com/in/gaspar-serna-8a0945215/" target="_blank" rel="noreferrer"><span className='text-blue-500'><FaLinkedin/></span></a>
      <a href="https://github.com/gxspxr" target="_blank" rel="noreferrer"><span className='text-white'><FaGithub/></span></a>
      </div>
     </footer>

    </main>
  )
}

export default Main