import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    allBots: [],
    yourBotArmy: [],
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(allBots => this.setState({allBots: allBots}))
  }

  recruitBot = (bot) => {
    if (!this.state.yourBotArmy.includes(bot)) return this.setState({yourBotArmy: [...this.state.yourBotArmy, bot]})
  }

  removeBot = (bot) => {
    let yourBotArmyClone = [...this.state.yourBotArmy]
    let index = yourBotArmyClone.findIndex(botClone => botClone.id === bot.id)
    yourBotArmyClone.splice(index, 1)
    this.setState({yourBotArmy: yourBotArmyClone})
  }

  render() {
    return (
      <div>
        <YourBotArmy removeBot={this.removeBot} yourBotArmy={this.state.yourBotArmy}/>
        <BotCollection recruitBot={this.recruitBot} allBots={this.state.allBots}/>
      </div>
    );
  }

}

export default BotsPage;
