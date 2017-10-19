import React from 'react';


import AddPlayer from "./AddPlayer";
import TitleBar from "./TitleBar"; 
import PlayerList from "./PlayerList"; 


class App extends React.Component {
	 
	render() {

		return(
			<div>
				<TitleBar title={this.props.title}/>
				<div className="wrapper"> 
					<PlayerList players={this.props.players}/>
					<AddPlayer/>
				 </div>
			</div>
		);
	}
} 
export default App;
