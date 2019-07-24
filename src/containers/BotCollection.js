import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"
class BotCollection extends React.Component {
	state = {
		thisBot: {},
		click: false 
	}

	clickHandler = (bot) => {
		this.setState({
			click: true,
			thisBot: bot
		})
	}
	
	changeClick = () => {
		this.setState({
			click: false
		})
	}
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {	this.state.click ?
				(<BotSpecs 
					bot={this.state.thisBot} 
					addToMyBots={this.props.addMyBots} 
					changeClick={this.changeClick}
				/>)
				  : 
				  this.props.bots.map(bot => 
					(<BotCard 
						key={bot.id} 
						bot={bot} 
						showBot={this.clickHandler} 
					/>))
			  }
			  
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
