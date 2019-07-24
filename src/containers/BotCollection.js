import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(botObj => <BotCard
            bot={botObj}
            key={botObj.id}
            botClick={this.props.botClick}
            />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
