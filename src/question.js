define(['react', 'question.rt', 'material-ui'], function (React, template, mui) {
	return  React.createClass({
	    render: function () {
	        return template.apply(this);
	    },
	    onAnswerClick: function(answerOption) {
	    	if (answerOption === this.props.content.correctAnswer) {
	    		this.props.answered(true);
	    	} else {
				this.props.answered(false);
	    	}	    	
	    }
	});
});