import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const role = localStorage.getItem('role')

  return (
    <div
      className={`fixed top-0 left-0 h-full z-40 w-64 transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95'
      } bg-blue-100 shadow-lg`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-blue-200">
        <h2 className="text-lg font-bold text-blue-900">SmartSpirit</h2>
        <button
          onClick={toggleSidebar}
          className="text-xl text-blue-600 hover:text-red-600 transition"
        >
          ×
        </button>
      </div>
      <nav className="flex flex-col p-4 gap-2">
        <Link
          to="/dashboard"
          className="hover:bg-blue-200 px-3 py-2 rounded text-blue-900 font-medium transition"
        >
          🏠 Dashboard
        </Link>
        {role === 'Admin' && (
          <Link
            to="/logs"
            className="hover:bg-blue-200 px-3 py-2 rounded text-blue-900 font-medium transition"
          >
            📋 Loglar
          </Link>
        )}
        <Link
          to="/roles"
          className="hover:bg-blue-200 px-3 py-2 rounded text-blue-900 font-medium transition"
        >
          🛡️ Roller
        </Link>
        <Link
          to="/users"
          className="hover:bg-blue-200 px-3 py-2 rounded text-blue-900 font-medium transition"
        >
          👥 Kullanıcılar
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
