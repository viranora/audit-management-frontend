import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/api'

const Users = () => {
  const [users, setUsers] = useState([])
  const role = localStorage.getItem('role')
  const currentUser = localStorage.getItem('username')

  useEffect(() => {
    getUsers().then(res => setUsers(res.data))
  }, [])

  const filteredUsers = role === 'Admin'
    ? users
    : users.filter(u => u.username === currentUser)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">KULLANICILAR</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(u => (
          <div
            key={u.id}
            className={`p-4 rounded shadow ${u.status === 'passive' ? 'bg-red-100' : 'bg-white'} flex flex-col gap-2`}
          >
            <div className="text-lg font-semibold text-gray-800">
              {u.firstName} {u.lastName}
            </div>
            <div className="text-sm text-gray-600">📧 {u.email}</div>
            <div className="text-sm text-gray-600">📱 {u.phoneNumber}</div>
            <div className="text-sm text-gray-600">🔐 Rol: {u.role}</div>
            {role === 'Admin' && (
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">✏️ Düzenle</button>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">🚫 Pasife Al</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
