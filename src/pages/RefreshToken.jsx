import React, { useState } from 'react'
import Modal from '../components/Modal'

const RefreshToken = ({ onClose }) => {
  const [message, setMessage] = useState('')

  const handleRefresh = () => {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) {
      localStorage.setItem('token', 'new-mock-token')
      setMessage('Token başarıyla yenilendi')
      console.log('Log: Token yenilendi (TR)')
    } else {
      setMessage('Refresh token bulunamadı')
    }
  }

  return (
    <Modal title="🔁 Token Yenile" onClose={onClose}>
      <button onClick={handleRefresh} className="w-full bg-green-600 text-white p-2 rounded">Yenile</button>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </Modal>
  )
}

export default RefreshToken
