#pragma strict
//dictates gun movement/rotation
var hRotSpeed : float = 50;
var vRotSpeed : float = 50;

function Start () {

}

function Update () {
	//stops for the horizonal direction
	var hAngle = transform.eulerAngles.y;		
	var rotH : float = Input.GetAxis("Horizontal") * hRotSpeed * Time.deltaTime;
	if (rotH > 0 && (hAngle <= 45 || hAngle >= 270)) {	
		transform.Rotate (0, rotH, 0);
	}
	if (rotH < 0 && (hAngle <= 90 || hAngle >= 315)) {
		transform.Rotate (0, rotH, 0);
	}
	
	
	//stops for the vertical direction
	var vAngle = transform.eulerAngles.x;	
	var rotV : float = Input.GetAxis("Vertical") * vRotSpeed * Time.deltaTime;
	if (rotV > 0 && (vAngle <= 45 || vAngle >= 270)) {
		transform.Rotate (rotV, 0, 0);
	}
	if (rotV < 0 && (vAngle <= 90 || vAngle >= 315)) {
		transform.Rotate (rotV, 0, 0);
	}
}