
class Circle { //JavaScript class to create and grow circles 
	constructor(x, y, r, cr, cg, cb) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.cr = cr;
		this.cg = cg;
		this.cb = cb;
		this.growing=true;
	  	let b = 0;
		}		

	show() {
		fill(this.cr, this.cg, this.cb);
		noStroke();
		ellipseMode(RADIUS);
		ellipse (this.x, this.y, this.r);
		}
	
	grow () {
		if (this.growing) {
			this.border ();
			this.r = this.r + 0.5;
			}
		}
	

	border() {
		if (this.growing) {
			if ((this.x + this.r > width) || (this.x - this.r < 0) || (this.y + this.r > height) || (this.y - this.r < 0)){
				this.growing = false;
			}
			if (this.r>30) {
				this.growing = false;
			}	
		}
	}	
}



//function is creating the newCircle following colors of circles defined in this function 
function newCircle () {
	s = int(random (spots.length));
	x = spots[s].x;
	y = spots[s].y;
	let valid = true;
	
	for (b in buble) {
		let dx = dist (x, y, buble[b].x, buble[b].y);
		if (dx < buble[b].r+5) {
			valid = false;
			break;
		}
	}

	if (valid) {
	
		cr = 68;
		cg = 85;
		cb = 17;
		
		if  (y > 400 && y <= 800) {	
		
			cr = 68;
			cg = 86;
			cb = 89;
		} else if (y > 800) {
		113,38,34
				cr = 113;
				cg = 38;
				cb = 34;
				}
		buble.push (new Circle (x, y, 5, cr, cg, cb));
		}
}


let buble = [];
let spots = [];
let img;

function preload () {
img = loadImage('text3.png');
}

function textborders () {
	img.loadPixels();
	index=0;
	for (y = 0; y < img.height; y++ ) {
		for (x = 0; x < img.width; x++) {
			r = img.pixels[index]; 
			if (r < 100) {
				spots.push ( new createVector (x, y));
			}
		index=index+4;
		}
	}
}



function setup(){
createCanvas (1134, 1300);
ellipseMode(RADIUS);
textborders ();

}


function draw() {
	colorMode(HSB);
	background(255,255,255,0.0);
	colorMode (RGB);
	newCircle();
	for (i in buble) {
		buble[i].grow()
		buble[i].show();
		if (buble[i].growing) {
			for (j in buble) {
				if (i != j) {
					dx = dist (buble[i].x, buble[i].y, buble[j].x, buble[j].y);
					if ((dx - buble[i].r - buble[j].r)<0) {
						buble[j].growing = false;
						buble[i].growing = false;
					}
				}	
			}
		}	
		
	}
}


