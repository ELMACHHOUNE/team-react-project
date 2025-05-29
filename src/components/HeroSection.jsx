import React from 'react'
import { Button } from "@/components/ui/button"
export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Gomycode University</h1>
          <p className="text-lg md:text-xl mb-6">Discover amazing program and connect with us.</p>
          <Button> Get Start now</Button>
        </div>
      </div>
      <div 
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://cdn.prod.website-files.com/6682c116172af44bb7ad4845/66ae29c969e4832349bc2da8_s-hdr.avif')"
        }}
      ></div>      
    </div>
  )
}
