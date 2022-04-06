var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
var width =400
var height = 400
var treasureX =150
var treasureY = 200
var isPlaying = true
var x = width/2
var y = height/2
var direction = true
var directionValue = true

var size = 10
var treasureTrinkle =true
var score = 0
canvas.width = width;
canvas.height = height;
ctx.scale(1.5,1);

document.body.appendChild(canvas);

createSnake =()=>{
	//BACKGROUND
	ctx.fillRect(10,10,width,height);
	ctx.clearRect(x,y,size,size);
}


//KEYINPUT
document.addEventListener('keydown', function(e) {
    setKey(e, true,isPlaying);
});

document.addEventListener('keyup', function(e) {
    setKey(e, false,isPlaying);
});

var oldx =0 
var oldy =0 
//MOUSE
document.addEventListener("mousemove", function(e) {
	console.log(e.pageX,e.pageY)
	if (e.pageX <oldx) {
		console.log('LEFT')
		oldx = e.pageX
		direction = true
		directionValue = false
	}else if (e.pageX >oldx) {
		oldx = e.pageX
		console.log('RIGHT')
		direction = true
		directionValue = true
	} else if (e.pageY >oldx) {
		console.log('UP')
		oldy = e.pageY
		direction = false
		directionValue = true
	}else if (e.pageY <oldx) {
		console.log('DOWN')
		oldy = e.pageY
		direction = false
		directionValue = false
	}else{
		console.log("NONE")
	}
});


//LOOP
setInterval(()=>{
	createSnake()
	move()
	findTreasure()	
	document.getElementById("btn").innerHTML = `${score}`;
},500);	

