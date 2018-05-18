function setup () {
	createCanvas (800, 800);
	
}

function draw () {
	//head
	fill (250,128,114);
	ellipse (100, 100, 150, 190);
	//eyes
	fill (255,255,255);
	ellipse (100, 60, 110, 10);
	//nose
	fill (0, 0, 0);
	rect (95, 50, 7, 90); 
	//nose small
	ellipse (99, 140, 15, 10) ;
	//pupil left
	fill (0, 0, 0);
	ellipse (80, 60, 20, 10); 
	//pupil right
	fill (0, 0 ,0);
	ellipse (120, 60, 20, 10);
	//mouth
	fill (128, 0, 0);
	rect (60, 160, 80, 3);


		var animate, left=0, imgObj=null;

function init(){

   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'absolute';
   imgObj.style.top = '240px';
   imgObj.style.left = '-300px';
   imgObj.style.visibility='hidden';

   moveRight();
}

function moveRight(){
    left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
        stop();
    }
    //f();
}

function stop(){
   clearTimeout(animate);
}

window.onload = function() {init();};
} 
