define(['react', 'lodash', 'hello.rt', 'server'], function (React, _, template, server) {
    'use strict';
    return {
    	getQuestion: function () {
    		return {
    			correctAnswer: 2,
    			questionTitle: 'UFC',
    			questionContent: 'Who is the UFC Light Heavyweight Champion ?',
    			answers: [
    				'Connor McGregor',
    				'Lyoto Machida',
    				'Jon Jones',
    				'Daniel Cormier'
    			]
    		}
    	}
    };
});
