'use client'

import { useTransactions } from '@/context/TransactionContext'

export default function TransactionList() {
  const { transactions } = useTransactions()

  if (transactions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Belum ada transaksi
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Riwayat Transaksi</h2>
      <div className="divide-y">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{transaction.category}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <p className={`font-medium ${
                transaction.type === 'INCOME' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'INCOME' ? '+' : '-'}Rp {transaction.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 