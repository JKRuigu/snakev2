// Keyinput
setKey = (event,status,isPlaying)=>{
	code = event.keyCode;
// 	arrow left 	37
// arrow up 	38
// arrow right 	39
// arrow down 	40
	if (status) {
		switch(code){
			case 37:
				direction = true
				directionValue = false
				break;
			case 38:
				direction = false
				directionValue = true
				break;
			case 39:
				direction = true
				directionValue = true
				break;
			case 40:
				direction = false
				directionValue = false
				break;
			default:
            	console.log("Invalid key");
		}
	}
}
