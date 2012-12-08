#pragma strict
var bullet: GameObject;

function Start () {
	
}

function Update () {
	InvokeRepeating("makebullet", 2, 0.3);
	Invoke("destroy_bullet", 10);
}

function makebullet(){
	//yield WaitForSeconds(1);
	Instantiate(bullet, transform.position, transform.rotation);
}

function destroy_bullet(){
	Destroy(gameObject);
}

