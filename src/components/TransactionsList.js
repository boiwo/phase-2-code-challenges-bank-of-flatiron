import React from "react";
import Transaction from "./Transaction";
function TransactionsList({transactions}) {
  const list = transactions.map((item)=>{
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  })
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>2024-01-01</td>
        <td>Income</td>
        <td>Income</td>
        <td>5000</td>
      </tr>
      <tr>
        <td>2024-02-03</td>
        <td>Pledge</td>
        <td>Premium</td>
        <td>10000</td>
      </tr>
      <td>2024-05-04</td>
        <td>Golden</td>
        <td>Japanise</td>
        <td>15000</td>
        
    </table>
  );
}

export default TransactionsList;