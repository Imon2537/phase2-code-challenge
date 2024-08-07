import React, { useEffect, useMemo, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer(){
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data))
  }, []);

 
    const filterSearch = transactions.filter((transaction) =>{
    if(transaction.description.toLowerCase().includes(search.toLowerCase())|| transaction.category.toLowerCase().includes(search.toLowerCase()) ) return transaction
    else if(search==='') return true
})
  return (
    <div>
      <Search filter={setSearch}/>
      <AddTransactionForm
        addTransaction={setTransactions}
        transactions={transactions} 
      />
      <TransactionsList transactions={filterSearch}/>
    </div>
  );
}

export default AccountContainer;
