import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header'; 
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/transactionList';
import { AddTransaction } from './components/addTransaction';
import { GlobalProvider } from './context/globalState';

class App extends Component {
  render() {
    return (
      <GlobalProvider className="header">
        <Header></Header>
        <div className=".container">
          <Balance></Balance>
          <IncomeExpenses></IncomeExpenses>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
