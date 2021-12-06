import './index.css'

const EmptyScreen = props => {
  const {result} = props
  return (
    <div className="container">
      <p className="text-center no-data-text">{result}</p>
    </div>
  )
}

export default EmptyScreen
