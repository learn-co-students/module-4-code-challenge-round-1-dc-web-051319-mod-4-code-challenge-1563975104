import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  addMyBots = (bot) => {
    let mybots = this.state.myBots.map(myBot => myBot.id)
      if(mybots.includes(bot.id)){
        return
      }else{
        this.setState({
          myBots: [...this.state.myBots, bot]
        })
      }}
     


  removeBot = (bot) => {
    let lessBots = this.state.myBots.filter(myBot => { return myBot.id !== bot.id
    })
    this.setState({
      myBots: lessBots
    })
  }

  render() {
    console.log(this.state.myBots)
    return (
      <div>
        <YourBotArmy 
          myBots={this.state.myBots} 
          takeAwayBots={this.removeBot}
        />
        <BotCollection 
          bots={this.state.bots} 
          addMyBots={this.addMyBots}
        />
      </div>
    );
  }

}

export default BotsPage;
