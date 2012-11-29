//#pragma strict
//
//var speed : float = 10;
//var objectToRotateAround : Transform;
//var axisToRotate : Vector3; 
//
//function Start () {
//	transform.position.x = Random.Range(180, 250);
//	transform.position.y = Random.Range(-800, -1000);
//	transform.position.z = Random.Range(180, 230);;
//}
//
//function Update () {	
//	transform.RotateAround(objectToRotateAround.position,axisToRotate,20*Time.deltaTime);
//}
//
//function Reset () {
//	transform.position = Vector3(
//		Random.Range(180, 250),
//		Random.Range(-800, -1000),
//		Random.Range(180, 230)
//	);
//}