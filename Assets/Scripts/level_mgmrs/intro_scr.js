var btnX: float;
var btnY: float;
var btnW: float;
var btnH: float;
var done:boolean;
var plane:GameObject;

function Start () {
	//Instantiate(plane,transform.position,transform.rotation);
	yield WaitForSeconds (3);
	guiText.text = "The premise is simple.";
	yield WaitForSeconds (3);
	guiText.text = "You're being drop from a plane into Portland";
	yield WaitForSeconds (3);
	guiText.text = "Theres another one of you out there.";
	yield WaitForSeconds (3);
	guiText.text = "Kill the other player";
	yield WaitForSeconds (3);
	guiText.text = "If your a pilot, you can use your mouse to pivot \n your lower view, and ARROW KEYS to move. ";
	yield WaitForSeconds (3);
	guiText.text = "If you're a gunner, you can move your\n turret using the WASD KEYS";
	yield WaitForSeconds (3);	
	guiText.text = "Charge yourself using the space bar,\n when in preparation to jump.";;
	yield WaitForSeconds (3);	
	guiText.text = "Use the j key to jump";
	yield WaitForSeconds (3);
//	guiText.text = "Use the k key to thrust in whatever\n direction you're looking";
//	yield WaitForSeconds (3);
	//guiText.text = "Use the k key to shield";
	guiText.text = "Connect to the server to initialize a game";
	yield WaitForSeconds (3);
	guiText.text = "Refreh the host to see if there are other games running";
	yield WaitForSeconds (3);
	guiText.text = "If a button appears below the \"Refresh Hosts\" button,\n click it to join the game.";
	yield WaitForSeconds (3);
	guiText.text = "";
	OpenLevel("Main"); 
}

function OpenLevel (level : String)
{
	yield new WaitForSeconds(0.35);
	Application.LoadLevel(level);
}

function Update () {

}