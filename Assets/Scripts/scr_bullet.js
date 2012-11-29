#pragma strict
var explosion : GameObject;
var speed : float = 30;
private var scene_manager : GameObject;

function Start () {
	Invoke("Destroy_Bullet", 2.0);
	scene_manager = GameObject.Find("scene_manager");
}

function Update () {
	transform.Translate (Vector3.forward * speed * Time.deltaTime);
}

function Destroy_Bullet () {
	Destroy(gameObject);
}