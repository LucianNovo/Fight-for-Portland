#pragma strict

var jumpSpeed: float = 500.0;
var speed: float = 6.0;
var gravity: float = 10.0; // gravity acceleration
//var speed : float = 10;
private var vSpeed: float = 0; // store vertical speed in a separate variable
var controller : CharacterController;

function Start () {
}

function Update ()
{
    // Move forward / backward
    var moveDir = transform.forward * 1;
    // Jump code
    if (controller.isGrounded){ // if character is grounded...
        vSpeed = 0; // its vert speed is zero
        if (Input.GetKeyDown("space"))
        {// but if jump pressed, set it to jumpSpeed
            vSpeed = jumpSpeed;
        }
    }
    // apply gravity acceleration
    vSpeed -= gravity * Time.deltaTime;
    moveDir.y = vSpeed; // include vSpeed in  moveDir
    //moveDir * Time.deltaTime is the displacement since last frame
    controller.Move(moveDir * Time.deltaTime);
}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "bullet")
	{
		Debug.Log("Collider Detected");
		Destroy(other.gameObject);
	}
}

function Reset () {
	transform.position = Vector3(0,0,0);
	Debug.Log("Reset Triggered");
}