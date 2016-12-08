var Snake = function (matrix, speed){
	this.matrix = matrix;
	this.speed = speed || 350;

	this.direction = {
		x: 1,
		y: 0
	}

	this.position = [
		{x:5, y:1},
		{x:4, y:1},
		{x:3, y:1}
	]

	var self = this;

	this.setDirection = function(e){
		switch(e.keyCode){
			case 37: //left
				self.direction.x = -1;
				self.direction.y = 0;
				break;
			case 38: //up
				self.direction.y = -1;
				self.direction.x = 0;
				break;
			case 39: //right
				self.direction.x = 1;
				self.direction.y = 0;
				break;
			case 40: //down
				self.direction.y = 1;
				self.direction.x = 0;
				break;
		}
	}

	this.setSnake = function(){
		for (var i=0; i<self.position.length; i++){
			self.matrix.setCell(self.position[i].x, self.position[i].y, 'snake');
		}
	}

	this.removeSnake = function(){
		for (var i=0; i<self.position.length; i++){
			self.matrix.element.children().filter('.snake').removeClass('snake');
		}
	}

	this.moveSnake = function(){
		for (var i=self.position.length-1; i>0; i--){
			self.position[i].x = self.position[i-1].x;
			self.position[i].y = self.position[i-1].y;
		}
		self.position[0].x = self.position[0].x + self.direction.x;
		self.position[0].y = self.position[0].y + self.direction.y;
	}

	this.checkSnake = function(){
		if (self.matrix.element.children().filter('.cell-' + self.position[0].x + '-' + self.position[0].y).hasClass('snake')){
			return true;
		}
	}

	this.checkWalls =function(){
		if (self.position[0].x < 1 || self.position[0].x > self.matrix.cols || self.position[0].y < 1 || self.position[0].y > self.matrix.rows){
			return true;
		}
	}

	this.gameOver = function(){
		alert('Game over');
		location.reload();
	}

	this.checkFood = function(){
		if (self.matrix.element.children().filter('.cell-' + self.position[0].x + '-' + self.position[0].y).hasClass('food')){
			return true;
		}
	}

	this.eatFood = function(){
		self.matrix.element.children().filter('.food').removeClass('food');
		self.position.push({x: self.position[self.position.length-1].x - self.direction.x , y: self.position[self.position.length-1].y - self.direction.y});
		self.matrix.setCell(getRandomInt(1, self.matrix.cols), getRandomInt(1, self.matrix.rows), 'food');
	}

	this.interval = function(){
		self.moveSnake();
		if(self.checkSnake() || self.checkWalls()){
			self.gameOver();
		};
		if(self.checkFood()){
			self.eatFood();
		};
		self.removeSnake();
		self.setSnake();
	}

	setInterval(this.interval, this.speed);
	document.addEventListener('keydown', this.setDirection);
}