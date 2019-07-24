import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {


  constructor() {
    super()
      this.state = {
        allBots: []
      }
  }


  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(object => {
        this.setState( { allBots: object } )
      })
  }

  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollection bots={this.state.allBots} />

      </div>
    );
  }

}

export default BotsPage;
