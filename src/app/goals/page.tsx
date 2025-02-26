'use client'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

interface SavingGoal {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  deadline: Date
  progress: number
}

export default function GoalsPage() {
  const [goals] = useState<SavingGoal[]>([
    {
      id: '1',
      name: 'Liburan ke Bali',
      targetAmount: 10000000,
      currentAmount: 5000000,
      deadline: new Date('2024-12-31'),
      progress: 50
    },
    // Tambahkan goal dummy lainnya
  ])

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Target Menabung</h1>
          <button className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
            <FiPlus />
            Target Baru
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <div key={goal.id} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">{goal.name}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full" 
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Target</p>
                    <p className="font-semibold">Rp {goal.targetAmount.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Terkumpul</p>
                    <p className="font-semibold">Rp {goal.currentAmount.toLocaleString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tenggat Waktu</p>
                  <p className="font-semibold">{goal.deadline.toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 