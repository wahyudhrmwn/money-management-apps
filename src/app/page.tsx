import TransactionForm from '@/components/TransactionForm'
import TransactionList from '@/components/TransactionList'
import { FiArrowUpRight, FiArrowDownRight, FiPieChart } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Saldo Total</p>
                <p className="text-2xl font-bold text-gray-900">Rp 12.500.000</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <FiPieChart className="text-primary-600 w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pemasukan Bulan Ini</p>
                <p className="text-2xl font-bold text-green-600">Rp 8.000.000</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FiArrowUpRight className="text-green-600 w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pengeluaran Bulan Ini</p>
                <p className="text-2xl font-bold text-red-600">Rp 5.500.000</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <FiArrowDownRight className="text-red-600 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transaction Form Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Tambah Transaksi Baru</h2>
            <TransactionForm />
          </div>

          {/* Transaction List Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <TransactionList />
          </div>
        </div>
      </main>
    </div>
  )
}
