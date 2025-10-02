import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import UserMenu from '../components/UserMenu'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sol üst köşede sabit açma butonu */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 bg-blue-400 text-white px-3 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          ☰
        </button>
      )}

      {/* Ana içerik */}
      <div className="flex-1 p-6 ml-0 md:ml-64 transition-all duration-300">
        <div className="flex justify-end mb-4">
          <UserMenu />
        </div>

        <h1 className="text-2xl font-bold mb-4">Hoş geldin, {localStorage.getItem('username')}</h1>
        <p className="text-gray-600">Sol panelden modüllere erişebilirsin.</p>
      </div>
    </div>
  )
}

export default Dashboard
