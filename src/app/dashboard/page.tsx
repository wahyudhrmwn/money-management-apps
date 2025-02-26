'use client';

import { useState, useEffect } from 'react';
import { Transaction } from '@/types';
import AddTransaction from '@/components/AddTransaction';

export default function Dashboard() {
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions(prev => [...prev, newTransaction]);
  };

  useEffect(() => {
    const newBalance = transactions.reduce((acc, curr) => {
      return curr.type === 'income' 
        ? acc + curr.amount 
        : acc - curr.amount;
    }, 0);
    setBalance(newBalance);
  }, [transactions]);

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Kartu Saldo */}
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Saldo Total</h2>
            <p className="text-3xl font-bold">Rp {balance.toLocaleString()}</p>
          </div>
        </div>

        {/* Kartu Pemasukan */}
        <div className="card bg-success text-success-content">
          <div className="card-body">
            <h2 className="card-title">Total Pemasukan</h2>
            <p className="text-3xl font-bold">
              Rp {transactions
                .filter(t => t.type === 'income')
                .reduce((acc, curr) => acc + curr.amount, 0)
                .toLocaleString()}
            </p>
          </div>
        </div>

        {/* Kartu Pengeluaran */}
        <div className="card bg-error text-error-content">
          <div className="card-body">
            <h2 className="card-title">Total Pengeluaran</h2>
            <p className="text-3xl font-bold">
              Rp {transactions
                .filter(t => t.type === 'expense')
                .reduce((acc, curr) => acc + curr.amount, 0)
                .toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <AddTransaction onAdd={handleAddTransaction} />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Riwayat Transaksi</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Deskripsi</th>
                <th>Kategori</th>
                <th>Tipe</th>
                <th>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date.toLocaleDateString()}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>
                    <span className={`badge ${transaction.type === 'income' ? 'badge-success' : 'badge-error'}`}>
                      {transaction.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}
                    </span>
                  </td>
                  <td>Rp {transaction.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
} 