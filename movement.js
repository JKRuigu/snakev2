//MOVEMENT
move = ()=>{ //direction true = horizontal false = vertical
	if (direction == true) {
		if ( directionValue== true) { // value true = right false = left
			x = x+10
			if (x == 270) {
				x= 10
			}
		}else{
			x=x-10
			if (x < 10) {
				x= 260
			}
		}		
	}else{
		if (directionValue == true) { // value true = up false = down
			y = y-10
			if (y < 10) {
				y = 390
			}
		}else{
			y=y+10
			if (y > 390) {
				y = 10
			}
		}
	}
}


