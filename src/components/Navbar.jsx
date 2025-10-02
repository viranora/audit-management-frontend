import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CaseApp</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/dashboard" className="hover:underline">Dashboard</a>
      </div>
    </nav>
  )
}

export default Navbar
