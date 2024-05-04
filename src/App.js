
import React, { useState } from 'react';
import './App.css';
import  Transaction from './components/Transaction'
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([
    { date: '2024-04-01', description: 'house', category: 'modern', amount: ' 15,000' },
    { date: '2024-04-02', description: 'wifi', category: 'original', amount: '10,000' },
    { date: '2024-04-03', description: 'car', category: 'mercebez', amount: '20,000' },
    { date: '2024-04-04', description: 'iphone', category: 'Income', amount: '50,000' },
    { date: '2024-04-05', description: 'brefcase', category: 'quality', amount: '30,000' },
    { date: '2024-04-06', description: 'box-profile', category: 'waranty', amount: '70,000' },
    { date: '2024-04-03', description: 'top tank', category: 'plastic', amount: '60,000' },
    { date: '2024-04-05', description: 'metallic pipes', category: 'metallic', amount: '40,000' },
    { date: '2024-04-01', description: 'medical bill', category: 'salary', amount: '18,000' },
    { date: '2024-04-30', description: 'container', category: 'Shopping', amount: '62,000' },
    { date: '2024-04-17', description: 'tiles', category: 'house', amount: '53,000' },
    { date: '2024-04-15', description: 'khaki', category: 'fashion', amount: '69,000' }
   
  
  ]);

   

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>The Royal Bank of Flatiron</p>
      </header>
      <br />
      <form>
        <input
          className='input1'
          type="text"
          placeholder='Search Your Recent Transactions'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <br />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <br />
      <div className='Table'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <Transaction
                key={index}
                date={transaction.date}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;   
        
      
      

  
  



