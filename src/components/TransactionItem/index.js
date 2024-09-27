// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyItem, historyDelete} = props
  const {title, amount, type, id} = historyItem

  const onDeleteHistory = () => {
    historyDelete(id)
  }
  return (
    <div className="historyBox">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div>
        <img
          className="img"
          alt="delete"
          onClick={onDeleteHistory}
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </div>
    </div>
  )
}
export default TransactionItem
