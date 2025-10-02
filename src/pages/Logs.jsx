import React, { useEffect, useState } from 'react'
import { getLogs } from '../services/api'

const logTypes = {
  BG: { label: 'Başarılı Giriş', color: 'bg-green-100', icon: '✅' },
  PD: { label: 'Parola Değişimi', color: 'bg-yellow-100', icon: '🔒' },
  LO: { label: 'Çıkış Yapıldı', color: 'bg-red-100', icon: '🚪' },
  TR: { label: 'Token Yenilendi', color: 'bg-blue-100', icon: '🔁' },
  ER: { label: 'Hata', color: 'bg-gray-100', icon: '⚠️' },
}

const Logs = () => {
  const [logs, setLogs] = useState([])
  const role = localStorage.getItem('role')

  useEffect(() => {
    if (role === 'Admin') {
      getLogs().then(res => setLogs(res.data))
    }
  }, [role])

  if (role !== 'Admin') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">Yetkiniz Yok</h2>
          <p className="text-gray-600">Bu sayfaya yalnızca Admin rolüne sahip kullanıcılar erişebilir.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">LOGLAR</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {logs.map(log => {
          const typeInfo = logTypes[log.type] || {
            label: log.type,
            color: 'bg-gray-100',
            icon: 'ℹ️',
          }

          return (
            <div
              key={log.id}
              className={`p-4 rounded shadow ${typeInfo.color} flex flex-col gap-2`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{typeInfo.icon}</span>
                <span className="font-semibold">{typeInfo.label}</span>
              </div>
              <div className="text-sm text-gray-700">
                <strong>Kullanıcı:</strong> {log.username}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Tarih:</strong> {log.createdDate}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Logs
