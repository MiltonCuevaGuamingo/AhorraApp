import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import LoanForm from './components/LoanForm'

function App() {
  return (
    <div>
      <Header />
      <LoanForm></LoanForm>
    </div>
  );
}

export default App;
