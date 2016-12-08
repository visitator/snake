var Matrix = function (element, cols, rows){
	this.element = element;
	this.cols = cols || 20;
	this.rows = rows || 20;

	this.create = function() {
		for (var i=1; i <= this.rows; i++){
			for (var j=1; j <= this.cols; j++){
				this.element.append($('<div>').addClass('cell-' + j + '-' + i));
			}
		}
		this.element.css({'display': 'inline-block'})
	}

	this.setCell = function(x, y, type){
		this.element.children().filter('.cell-' + x + '-' + y).addClass(type);
	}

	this.construct = function() {
		this.element.css({
			width: this.cols*20 + 'px',
			height: this.rows*20 + 'px'
		})
		this.create();
		this.setCell(getRandomInt (3, this.cols), getRandomInt (3, this.rows), 'food');
	}
}

function getRandomInt (min, max) {
	return Math.floor(Math.random()*(max-min+1)+min)
}