'use client'

import { useState } from 'react'

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('month')

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Analisis Keuangan</h1>
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="week">Minggu Ini</option>
            <option value="month">Bulan Ini</option>
            <option value="year">Tahun Ini</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Statistik Cards */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Ringkasan Statistik</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Pemasukan</p>
                <p className="text-xl font-bold text-blue-600">Rp 18.500.000</p>
                <p className="text-sm text-green-500 mt-2">+12% dari bulan lalu</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Pengeluaran</p>
                <p className="text-xl font-bold text-red-600">Rp 7.000.000</p>
                <p className="text-sm text-red-500 mt-2">+5% dari bulan lalu</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-500">Saldo</p>
                <p className="text-xl font-bold text-green-600">Rp 11.500.000</p>
                <p className="text-sm text-green-500 mt-2">+7% dari bulan lalu</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-500">Rasio Pengeluaran</p>
                <p className="text-xl font-bold text-purple-600">37.8%</p>
                <p className="text-sm text-purple-500 mt-2">-2% dari bulan lalu</p>
              </div>
            </div>
          </div>

          {/* Top Expenses */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Pengeluaran Terbesar</h2>
            <div className="space-y-4">
              {[
                { category: 'Makanan', amount: 2500000, percentage: 35 },
                { category: 'Transport', amount: 1500000, percentage: 21 },
                { category: 'Belanja', amount: 2000000, percentage: 28 },
                { category: 'Hiburan', amount: 1000000, percentage: 16 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-medium">Rp {item.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Transaksi Terakhir</h2>
            <div className="space-y-4">
              {[
                { desc: 'Makan Siang', amount: -150000, date: '24 Mar' },
                { desc: 'Gaji', amount: 8000000, date: '23 Mar' },
                { desc: 'Belanja Bulanan', amount: -1200000, date: '22 Mar' },
                { desc: 'Transport', amount: -500000, date: '21 Mar' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.desc}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <p className={`font-medium ${
                    item.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.amount > 0 ? '+' : ''}{item.amount.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 