window.onload = function() {
	var m1 = new Matrix($('#matrix1'), 20, 20);
	m1.construct();
	var s1 = new Snake(m1, 200);
	s1.setSnake();

		
		var m2 = new Matrix($('#matrix2'), 20, 20);
		m2.construct();
		var s2 = new Snake(m2, 200);
		s2.setSnake();

		/*var m3 = new Matrix($('#matrix3'), 20, 20);
		m3.construct();
		var s3 = new Snake(m3, 200);
		s3.setSnake();*/
		
}