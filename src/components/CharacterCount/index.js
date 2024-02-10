import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCount extends Component {
  state = {countList: [], name: '', count: 0}

  getCount = event => {
    this.setState(prevState => ({
      name: event.target.value,
      count: prevState.count + 1,
    }))
  }

  addCount = event => {
    event.preventDefault()
    const {name, count} = this.state

    const newCount = {
      id: uuidv4(),
      name,
      count,
    }

    this.setState(prevState => ({
      countList: [...prevState.countList, newCount],
      name: '',
      count: 0,
    }))
  }

  render() {
    const {countList, name} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="orange-container">
            <div className="header">
              <h1 className="orange-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            <div className="count-container">
              {countList.length > 0 ? (
                <ul className="count-list">
                  {countList.map(eachCount => (
                    <li className="list" key={eachCount.id}>
                      <p>{eachCount.name} </p>
                      <p>: {eachCount.count}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="img"
                />
              )}
            </div>
          </div>
          <div className="input-container">
            <h1 className="input-heading">Character Counter</h1>
            <form onSubmit={this.addCount} className="input-button-container">
              <input
                type="text"
                placeholder="Enter the characters here"
                value={name}
                className="input"
                onChange={this.getCount}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCount
