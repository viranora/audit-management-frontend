// src/services/api.js

// Giriş simülasyonu
export const loginUser = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    if (username === 'admin' && password === '12345678') {
      localStorage.setItem('role', 'Admin')
      localStorage.setItem('username', 'admin')
      resolve({
        data: {
          token: 'mock-token',
          refreshToken: 'mock-refresh-token',
        },
      })
    } else if (username === 'user' && password === '12345678') {
      localStorage.setItem('role', 'User')
      localStorage.setItem('username', 'user')
      resolve({
        data: {
          token: 'mock-token',
          refreshToken: 'mock-refresh-token',
        },
      })
    } else {
      reject(new Error('Invalid credentials'))
    }
  })
}

// Loglar mock
export const getLogs = async () => {
  return Promise.resolve({
    data: [
      { id: 1, username: 'admin', type: 'BG', createdDate: '2025-10-01 10:00' },
      { id: 2, username: 'admin', type: 'PD', createdDate: '2025-10-01 11:00' },
      { id: 3, username: 'admin', type: 'LO', createdDate: '2025-10-01 12:00' },
    ],
  })
}

// Roller mock
export const getRoles = async () => {
  return Promise.resolve({
    data: [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'User' },
    ],
  })
}

// Kullanıcılar mock
export const getUsers = async () => {
  return Promise.resolve({
    data: [
      {
        id: 1,
        username: 'admin',
        firstName: 'Sema',
        lastName: 'Özyılmaz',
        email: 'admin@smartspirit.ai',
        phoneNumber: '555-1234',
        role: 'Admin',
        status: 'active',
      },
      {
        id: 2,
        username: 'user',
        firstName: 'Ali',
        lastName: 'Yılmaz',
        email: 'user@smartspirit.ai',
        phoneNumber: '555-5678',
        role: 'User',
        status: 'passive',
      },
    ],
  })
}
