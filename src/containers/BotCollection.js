import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"
class BotCollection extends React.Component {
	state = {
		isClicked: true
	}

	changeIsClicked = () => {

	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {
				  this.props.bots.map(bot => (<BotCard key={bot.id} bot={bot} addMyBots={this.props.addMyBots} />))
				 
			  }
			  { this.props.bots.map(bot => (<BotSpecs key={bot.id} bot={bot}/>))}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
