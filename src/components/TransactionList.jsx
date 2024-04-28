import React from "react";
import Transaction from "./Transaction";
function TransactionsList({transactions}) {
  const list = transactions.map((item)=>{
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  })
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h1 className="ui center aligned header">Date</h1>
          </th>
          <th>
            <h1 className="ui center aligned header">Description</h1>
          </th>
          <th>
            <h1 className="ui center aligned header">Category</h1>
          </th>
          <th>
            <h1 className="ui center aligned header">Amount</h1>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;
