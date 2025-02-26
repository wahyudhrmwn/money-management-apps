'use client';

import { useState } from 'react';
import { Transaction } from '@/types';

interface AddTransactionProps {
  onAdd: (transaction: Transaction) => void;
}

export default function AddTransaction({ onAdd }: AddTransactionProps) {
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [type, setType] = useState<'INCOME' | 'EXPENSE'>('INCOME');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
      description,
      category,
      type,
      date: new Date(),
      userId: '1'
    };

    onAdd(newTransaction);
    
    // Reset form
    setAmount('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Tambah Transaksi Baru</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Jumlah</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Deskripsi</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Kategori</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Tipe</span>
            </label>
            <select 
              className="select select-bordered"
              value={type}
              onChange={(e) => setType(e.target.value as 'INCOME' | 'EXPENSE')}
            >
              <option value="INCOME">Pemasukan</option>
              <option value="EXPENSE">Pengeluaran</option>
            </select>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Tambah Transaksi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 