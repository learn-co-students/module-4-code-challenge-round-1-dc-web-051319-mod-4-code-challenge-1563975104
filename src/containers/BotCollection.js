import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(bot => {
						return <BotCard isArmy={false} selectBot={this.props.selectBot} key={bot.id} bot={bot}/>
					})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
