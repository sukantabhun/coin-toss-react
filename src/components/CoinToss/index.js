import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalToss: 0,
    headToss: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTail = () => {
    this.setState(prevState => ({
      totalToss: prevState.totalToss + 1,
    }))
    this.setState({
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    })
  }

  onHeads = () => {
    this.setState(prevState => ({
      totalToss: prevState.totalToss + 1,
      headToss: prevState.headToss + 1,
    }))
    this.setState({
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    })
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.onHeads()
    } else {
      this.onTail()
    }
  }

  render() {
    const {totalToss, headToss, imgUrl} = this.state
    const tailToss = totalToss - headToss
    console.log(imgUrl)
    return (
      <div className="element-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="image" />
          <button type="button" onClick={this.onToss} className="button">
            Toss Coin
          </button>
          <div className="detail-container">
            <p>Total: {totalToss}</p>
            <p>Heads: {headToss}</p>
            <p>Tails: {tailToss}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
