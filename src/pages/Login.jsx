// src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'
import { validateLogin } from '../utils/validators'

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const validation = validateLogin(form)
    if (validation.hasErrors) {
      setErrors(validation.errors)
      return
    }

    try {
      const res = await loginUser(form)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('refreshToken', res.data.refreshToken)
      navigate('/dashboard')
    } catch (err) {
      setErrors({ general: 'Giriş başarısız' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Giriş Yap</h2>
        <input name="username" placeholder="Kullanıcı Adı" onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        <input name="password" type="password" placeholder="Parola" onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Giriş Yap</button>
        {errors.general && <p className="text-red-500 text-sm text-center">{errors.general}</p>}
      </form>
    </div>
  )
}

export default Login
