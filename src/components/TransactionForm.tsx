'use client'

import { useState } from 'react'
import { FiCalendar, FiDollarSign, FiFileText, FiTag } from 'react-icons/fi'
import { useTransactions } from '@/context/TransactionContext'

export default function TransactionForm() {
  const { addTransaction } = useTransactions()
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    category: '',
    type: 'EXPENSE',
    date: new Date().toISOString().split('T')[0]
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validasi
    if (!formData.amount || !formData.description || !formData.category) {
      setError('Mohon lengkapi semua field')
      return
    }

    try {
      const amount = parseFloat(formData.amount)
      addTransaction({
        amount,
        description: formData.description,
        category: formData.category,
        type: formData.type as 'INCOME' | 'EXPENSE',
        date: new Date(formData.date),
        userId: '1' // Sementara hardcode
      })

      // Reset form
      setFormData({
        amount: '',
        description: '',
        category: '',
        type: 'EXPENSE',
        date: new Date().toISOString().split('T')[0]
      })

      // Tampilkan notifikasi sukses
      alert('Transaksi berhasil ditambahkan!')
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan transaksi')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Jumlah
        </label>
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiDollarSign className="text-gray-400" />
          </div>
          <input
            type="number"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            placeholder="0"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Deskripsi
        </label>
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiFileText className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Masukkan deskripsi"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kategori
          </label>
          <div className="relative rounded-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiTag className="text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Pilih Kategori</option>
              <option value="Makanan">Makanan</option>
              <option value="Transport">Transportasi</option>
              <option value="Belanja">Belanja</option>
              <option value="Hiburan">Hiburan</option>
              <option value="Tagihan">Tagihan</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tanggal
          </label>
          <div className="relative rounded-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiCalendar className="text-gray-400" />
            </div>
            <input
              type="date"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all ${
            formData.type === 'EXPENSE'
              ? 'border-red-500 bg-red-50 text-red-600'
              : 'border-gray-200 text-gray-600 hover:border-red-500 hover:bg-red-50'
          }`}
          onClick={() => setFormData({...formData, type: 'EXPENSE'})}
        >
          Pengeluaran
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all ${
            formData.type === 'INCOME'
              ? 'border-green-500 bg-green-50 text-green-600'
              : 'border-gray-200 text-gray-600 hover:border-green-500 hover:bg-green-50'
          }`}
          onClick={() => setFormData({...formData, type: 'INCOME'})}
        >
          Pemasukan
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
      >
        Simpan Transaksi
      </button>
    </form>
  )
} 