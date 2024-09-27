import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    inputTitle: '',
    inputAmount: '',
    inputType: 'INCOME',
  }

  onAddHistory = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, inputType} = this.state
    const history = {
      id: v4(),
      title: inputTitle,
      amount: inputAmount,
      type: inputType,
    }
    console.log(history.type)

    this.setState(prevState => ({
      historyList: [...prevState.historyList, history],
      inputTitle: '',
      inputAmount: '',
      inputType: 'INCOME',
    }))
  }

  onTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onType = event => {
    this.setState({inputType: event.target.value})
  }

  historyDelete = id => {
    const {historyList} = this.state

    this.setState({
      historyList: historyList.filter(every => every.id !== id),
    })
  }

  render() {
    const Income = transactionTypeOptions[0]
    const Expense = transactionTypeOptions[1]
    const {historyList, inputTitle, inputType, inputAmount} = this.state

    const expenseList = historyList.filter(every => every.type === 'EXPENSES')
    const incomeList = historyList.filter(every => every.type === 'INCOME')
    console.log(expenseList)
    console.log(incomeList)

    return (
      <div className="mainDiv">
        <div className="moneyManagerContainer">
          <h1 className="name">Hi Mighty_codes</h1>
          <p className="welcomePara">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <div>
          <MoneyDetails expenseList={expenseList} incomeList={incomeList} />
        </div>

        <div>
          <div className="Container">
            <div className="TransactionContainer">
              <h1 className="h1">Add Transaction</h1>
              <form onSubmit={this.onAddHistory}>
                <div className="detailsContainer">
                  <label htmlFor="title">TITLE</label>
                  <input
                    onChange={this.onTitle}
                    value={inputTitle}
                    id="title"
                    type="text"
                    placeholder="TITLE"
                  />
                </div>
                <div className="detailsContainer">
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    id="amount"
                    value={inputAmount}
                    onChange={this.onAmount}
                    type="num"
                    placeholder="AMOUNT"
                  />
                </div>
                <div className="detailsContainer">
                  <label htmlFor="type">TYPE</label>
                  <select id="type" value={inputType} onChange={this.onType}>
                    <option value={Income.optionId}>
                      {Income.displayText}
                    </option>
                    <option value={Expense.optionId}>
                      {Expense.displayText}
                    </option>
                  </select>
                </div>
                <div>
                  <button type="submit">Add</button>
                </div>
              </form>
            </div>

            <div className="HistoryContainer">
              <h1 className="h1">History</h1>
              <div className="history">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p> </p>
                <p> </p>
              </div>
              <div>
                {historyList.map(every => (
                  <TransactionItem
                    historyItem={every}
                    historyDelete={this.historyDelete}
                    key={every.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
