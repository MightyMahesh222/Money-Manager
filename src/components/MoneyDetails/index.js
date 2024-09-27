// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {expenseList, incomeList} = props

  const totalExpense = expenseList.reduce(
    (total, every) => parseInt(total) + parseInt(every.amount),
    parseInt(0),
  )

  const totalIncome = incomeList.reduce(
    (total, every) => parseInt(total) + parseInt(every.amount),
    parseInt(0),
  )

  let balance = 0

  balance = totalIncome - totalExpense

  return (
    <div className="moneyDiv">
      <div className="balanceDiv1">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="money">
          <p className="balance">
            Your Balance <br />
            <span data-testid="balanceAmount" className="rupees">
              Rs {balance}
            </span>
          </p>
        </div>
      </div>
      <div className="balanceDiv2">
        <img
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="money">
          <p className="balance">
            Your Income <br />
            <span data-testid="incomeAmount" className="rupees">
              Rs {totalIncome}
            </span>
          </p>
        </div>
      </div>
      <div className="balanceDiv3">
        <img
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="money">
          <p className="balance">
            Your Expenses <br />
            <span data-testid="expensesAmount" className="rupees">
              Rs {totalExpense}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
