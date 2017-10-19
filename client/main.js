import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from "./../imports/api/players";

import App from "./../imports/ui/App"; 
 

Meteor.startup( () => {
	// Call Tracker.autorun
	// create variable players -> set = to fetch query
	Tracker.autorun( () => {
		let players = Players.find({}, { sort: { score: -1 } }).fetch(); 
		let positionedPlayer = calculatePlayerPositions(players);
		let title = "Score keep";
		 
		ReactDOM.render(<App title={title} players={positionedPlayer} />, document.querySelector("#app"));
	});

});