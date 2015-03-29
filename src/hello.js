define(['react', 'lodash', 'hello.rt', 'server', 'react-tap-event-plugin'], function (React, _, template, server, injectTapEventPlugin) {
    'use strict';
    return React.createClass({
        displayName: 'Hello',
        getInitialState: function () {
        	injectTapEventPlugin();
        	return {
        		question: null,
        		points: 0
        	};
        },
        startGame: function () {
        	var newQuestion = server.getQuestion(); 
        	this.setState({question: newQuestion});
        },
        render: function () {
        	return template.apply(this);
        },
        getQuestion: function () {
        	return this.state.question;
        },
        questionAnswered: function(correctAnswer) {
        	if (correctAnswer) {
        		var newPoints = this.state.points + 1;
        		this.setState({
        			points: newPoints,
        			question: null
        		});
        	}
        }
    });
});
