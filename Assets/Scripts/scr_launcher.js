#pragma strict
//creates bullet(runs it's script as well)
//adds a shot to the player's profile. 
var bullet : GameObject;

private var scene_manager : GameObject;

function Start () {	
	scene_manager = GameObject.Find("scene_manager");
}

function Update () {
	if (Input.GetKeyDown("e")) {
		Instantiate (bullet, transform.position, transform.rotation);
		audio.Play();
		//scene_manager.GetComponent(scr_scene_manager).AddShots(1);
		//scene_manager.GetComponent(scr_scene_manager).decreaseInjection(1);
		//scene_manager.GetComponent(scr_scene_manager).decreasePower(1);
	}
}

