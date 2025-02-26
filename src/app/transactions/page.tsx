import { FiFilter, FiDownload } from 'react-icons/fi'
import TransactionList from '@/components/TransactionList'

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Riwayat Transaksi</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FiFilter className="text-gray-500" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FiDownload className="text-gray-500" />
              Export
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6">
            <TransactionList 
              transactions={[
                {
                  id: '1',
                  amount: 150000,
                  description: 'Makan Siang',
                  category: 'Makanan',
                  type: 'EXPENSE',
                  date: new Date(),
                  userId: '1'
                },
                // Tambahkan transaksi dummy lainnya
              ]} 
            />
          </div>
        </div>
      </div>
    </div>
  )
} 