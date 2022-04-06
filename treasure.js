//FOOD
createRandomX = ()=>{
	let ran = Math.floor(Math.random()*260); //generate random number from 0 -390;
	let ran2 = ran -(ran%10); //creates a number divisible by 10;
	ran2 = ran2 <10? 10:ran2 //checks wheather is below the margin(m);
	return ran2;
}
createRandomY = ()=>{
	let ran = Math.floor(Math.random()*390); //generate random number from 0 -390;
	let ran2 = ran -(ran%10); //creates a number divisible by 10;
	ran2 = ran2 <10? 10:ran2 //checks wheather is below the margin(m);
	return ran2;
}
createTreasure =()=>{
	treasureX = createRandomX()
	treasureY = createRandomY()
}

displayTreasure =()=>{
	if (treasureTrinkle) {
		ctx.clearRect(treasureX,treasureY,4,4);
		treasureTrinkle = false
	}else{
		ctx.clearRect(treasureX,treasureY,8,8);
		treasureTrinkle = true
	}
}


findTreasure=()=>{
	if (treasureX == x && treasureY == y) {
		score =score+10
		createTreasure()
		displayTreasure()
		
	}else{
		displayTreasure()
	}
}