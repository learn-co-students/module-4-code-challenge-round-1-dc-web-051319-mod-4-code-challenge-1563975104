import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {


  constructor() {
    super()
      this.state = {
        allBots: [],
        botArmy: []
      }
  }


  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(object => {
        this.setState( { allBots: object } )
      })
  }

  botClick = (bot) =>  {
    if (!this.state.botArmy.includes(bot)) {
      this.setState( {botArmy: [...this.state.botArmy, bot]})
    } else {
      alert("Bot Already Enlisted!")
    }

  }

  removeBotClick = (bot) => {
    const array = [...this.state.botArmy]

    debugger

  }



  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBotClick={this.removeBotClick}/>
        <BotCollection bots={this.state.allBots} botClick={this.botClick}/>

      </div>
    );
  }

}

export default BotsPage;

// this.setState( {botArmy: [...this.state.botArmy, ]} )
