import React, { useState } from 'react'
import ChangePassword from '../pages/ChangePassword'
import RefreshToken from '../pages/RefreshToken'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'

const UserMenu = () => {
  const [open, setOpen] = useState(false) // Menü açık mı?
  const [activeTab, setActiveTab] = useState(null) // Hangi modal açık?
  const [confirmLogout, setConfirmLogout] = useState(false) // Çıkış onayı açık mı?
  const navigate = useNavigate()

  // Çıkış onayı verildiğinde yapılacak işlem
  const handleLogoutConfirmed = () => {
    console.log('Log: Kullanıcı çıkış yaptı (LO)')
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="flex justify-end mb-4 relative">
      {/* Kullanıcı butonu */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-300 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
      >
        {localStorage.getItem('username') || 'Kullanıcı'}
      </button>

      {/* Açılır menü */}
      {open && (
        <div
          className={`absolute top-full right-0 mt-2 bg-blue-100 shadow rounded w-48 z-10 transition-all duration-300 ease-out ${
            open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <button
            onClick={() => setActiveTab('password')}
            className="block w-full text-left px-4 py-2 text-black hover:bg-blue-500 hover:text-white transition"
          >
            Parola Değiştir
          </button>

          <button
            onClick={() => setActiveTab('token')}
            className="block w-full text-left px-4 py-2 text-black hover:bg-blue-500 hover:text-white transition"
          >
            Token Yenile
          </button>

          <button
            onClick={() => setConfirmLogout(true)}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-blue-500 hover:text-red-400 transition"
          >
            Çıkış Yap
          </button>

        </div>
      )}

      {/* Parola modalı */}
      {activeTab === 'password' && (
        <ChangePassword onClose={() => setActiveTab(null)} />
      )}

      {/* Token modalı */}
      {activeTab === 'token' && (
        <RefreshToken onClose={() => setActiveTab(null)} />
      )}

      {/* Çıkış onay modalı */}
      {confirmLogout && (
        <Modal title="🚪 Oturumu Kapat" onClose={() => setConfirmLogout(false)}>
          <p className="text-gray-700 mb-4">
            Oturumu kapatmak istediğinizden emin misiniz?
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setConfirmLogout(false)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Vazgeç
            </button>
            <button
              onClick={handleLogoutConfirmed}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Evet, Çıkış Yap
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default UserMenu
