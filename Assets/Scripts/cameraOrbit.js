#pragma strict
var centerOfRotation: Transform;
var speed: int;

function Start () {
}

function Update(){
	transform.RotateAround(transform.position, centerOfRotation.up, speed * Time.deltaTime);
}


