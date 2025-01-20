import React from 'react'
import { Button } from './components/ui/button'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()

  return (
    <div className="bg-black text-white w-full h-screen flex justify-center items-center flex-col gap-5">
    <p className="text-3xl">Welcome to shadcn</p>
    <Button variant="secondary" onClick={()=>{navigate('/gpt')}}>Click me</Button>
  </div>
  )
}

export default Dashboard