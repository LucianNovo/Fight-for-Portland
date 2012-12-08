#pragma strict
function Start () {
}

function Update() 
{
    transform.Translate(Vector3.forward * 300 * Time.deltaTime);
}
