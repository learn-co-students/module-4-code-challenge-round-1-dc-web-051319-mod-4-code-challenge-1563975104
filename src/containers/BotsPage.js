import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import SearchBar from '../components/SearchBar'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    allBots: [],
    yourBotArmy: [],
    isBotSpecsActive: false,
    selectedBot: null,
    isSelectedBotRecruit: null,
    filterdBots: [],
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(allBots => this.setState({allBots: allBots, filterdBots: allBots}))
  }

  recruitBot = (bot) => {
    if (!this.state.yourBotArmy.includes(bot)) return this.setState({isSelectedBotRecruit: true, yourBotArmy: [...this.state.yourBotArmy, bot]})
  }

  selectBot = (bot) => {    
    this.setState({isBotSpecsActive: true, selectedBot: bot, isSelectedBotRecruit: this.state.yourBotArmy.includes(bot)})
  }

  showAllBots = () => {
    this.setState({isBotSpecsActive: false, selectedBot: null})
  }

  removeBot = (bot) => {
    let yourBotArmyClone = [...this.state.yourBotArmy]
    let index = yourBotArmyClone.findIndex(botClone => botClone.id === bot.id)
    yourBotArmyClone.splice(index, 1)
    this.setState({yourBotArmy: yourBotArmyClone, isSelectedBotRecruit: false})
  }

  handleFilter = (event) => {
    let selection = event.target.value

    switch (selection) {
      case "all":
        this.setState({filterdBots: this.state.allBots})
        break;
      case "support":
        let supportFilter = this.state.allBots.filter(bot => bot.bot_class === "Support")
        this.setState({filterdBots: supportFilter})
        break;
      case "assault":
        let assaultFilter = this.state.allBots.filter(bot => bot.bot_class === "Assault")
        this.setState({filterdBots: assaultFilter})
        break;
      case "defender":
        let defenderFilter = this.state.allBots.filter(bot => bot.bot_class === "Defender")
        this.setState({filterdBots: defenderFilter})
        break; 
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          removeBot={this.removeBot} 
          yourBotArmy={this.state.yourBotArmy}/>
        <SearchBar 
          handleFilter={this.handleFilter}
        />
        { (this.state.isBotSpecsActive) ? 
        <BotSpecs 
          removeBot={this.removeBot} 
          isSelectedBotRecruit={this.state.isSelectedBotRecruit} 
          showAllBots={this.showAllBots} 
          recruitBot={this.recruitBot} 
          bot={this.state.selectedBot}/> : 
        <BotCollection 
          selectBot={this.selectBot} 
          allBots={this.state.filterdBots}/>
        }
      </div>
    );
  }

}

export default BotsPage;
