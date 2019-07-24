import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map(botObj => <BotCard
              bot={botObj}
              key={botObj.id}
              botClick={this.props.botClick}
              />)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

//
// {this.props.botArmy.map(botObj => <BotCard
//   bot={botObj}
//   key={botObj.id}
//   botClick={this.props.botClick}
//   />)}
