import 'bootstrap/dist/css/bootstrap.min.css'
import AddExpenseForm from './components/AddExpenseForm'
import Budget from './components/Budget'
import ExpenseItem from './components/ExpenseItem'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import Remaining from './components/Remaining'
import { AppProvider } from './components/context/AppContext'
import { Button, Container, ProgressBar } from 'react-bootstrap'
import { useEffect } from 'react'
import Login from './components/Login'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <AppProvider>
    <div className='container'>
      <h1 className='mt-3'>Budget.r</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList/>
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>
        </div>
      </div>
    </div>
    </AppProvider>
  )
}


export default App