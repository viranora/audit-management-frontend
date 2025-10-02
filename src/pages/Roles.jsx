import React, { useEffect, useState } from 'react'
import { getRoles } from '../services/api'

const Roles = () => {
  const [roles, setRoles] = useState([])
  const role = localStorage.getItem('role')

  useEffect(() => {
    getRoles().then(res => setRoles(res.data))
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">ROLLER</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map(r => (
          <div key={r.id} className="bg-white shadow rounded p-4 flex flex-col gap-2">
            <div className="text-lg font-semibold text-gray-800">🔸 {r.name}</div>
            {role === 'Admin' && (
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">✏️ Düzenle</button>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">🗑️ Sil</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Roles
