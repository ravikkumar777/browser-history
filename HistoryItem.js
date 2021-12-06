import './index.css'

const HistoryItem = props => {
  const {eachResult, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachResult

  const onDeleteItem = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="d-flex flex-row justify-content-between">
      <div>
        <span className="time">{timeAccessed}</span>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <span className="result-title">{title}</span>
        <span className="result-url">{domainUrl}</span>
      </div>
      <div>
        <button type="button" onClick={onDeleteItem} className="del-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="del"
            className="del-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
