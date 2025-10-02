import React, { useState } from 'react'
import { validatePassword } from '../utils/validators'
import Modal from '../components/Modal'

const ChangePassword = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const validation = validatePassword(newPassword)
    if (validation.hasError) {
      setError(validation.message)
      return
    }

    setSuccess(true)
    setError('')
    console.log('Log: Parola değiştirildi (PD)')
  }

  return (
    <Modal title="🔒 Parola Değiştir" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Yeni Parola"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Kaydet</button>
        {success && <p className="text-green-600 text-sm">Parola başarıyla değiştirildi</p>}
      </form>
    </Modal>
  )
}

export default ChangePassword
