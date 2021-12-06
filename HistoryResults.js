import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import EmptyScreen from '../EmptyScreen'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryResults extends Component {
  state = {
    searchInput: '',
    historyItems: initialHistoryList,
  }

  onChangeInputText = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {historyItems} = this.state

    const remainingItems = historyItems.filter(eachItem => eachItem.id !== id)

    this.setState({historyItems: remainingItems})
    // this.setState({itemsCount: historyItems.length})

    // if (itemsCount === 0) {
    //   this.setState({emptyScreen: true})
    // }
  }

  render() {
    const {searchInput, historyItems} = this.state

    const filteredResults = historyItems.filter(eachResult =>
      eachResult.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="nav d-flex flex-row justify-content-start">
          <img
            className="heading"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="history"
          />
          <div className="input-group flex-nowrap w-50 my-2 mx-5">
            <span className="input-group-text search-icon" id="addon-wrapping">
              <img
                className=""
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Search History.."
              onChange={this.onChangeInputText}
              value={searchInput}
            />
          </div>
        </div>

        <div className="container results-container">
          {filteredResults.map(eachResult => (
            <HistoryItem
              eachResult={eachResult}
              key={eachResult.id}
              deleteHistoryItem={this.deleteHistoryItem}
            />
          ))}
        </div>
        {filteredResults.length === 0 && (
          <EmptyScreen result="No History Items to Show.." />
        )}
      </div>
    )
  }
}

export default HistoryResults
