#pragma strict

function Start () {
	audio.Play();
	Invoke ("Destroy_Explosion", 3);
}

function Update () {

}

function Destroy_Explosion () {
	Destroy (gameObject);
}