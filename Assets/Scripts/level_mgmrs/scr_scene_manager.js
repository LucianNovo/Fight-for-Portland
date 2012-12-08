#pragma strict
var gameTime : float = 60;
var score : int = 0;
var shots : int = 0;

function Start () {
	InvokeRepeating ("DecrementTime", 1.0, 1.0);
}

function Update () {

}

function DecrementTime () {
	gameTime --;
	if (gameTime < 0.5) {
		PlayerPrefs.SetInt("score", score);
		Application.LoadLevel("scene_game_over");
	}
}

function AddScore (n : int) {
	score += n;
}

function AddShots (n : int) {
	shots += n;
}

function OnGUI () {
	GUI.Label (Rect(Screen.width - 80, 10, 100, 20), "Time: " + gameTime);
	GUI.Label (Rect(10, 10, 100, 20), "Score: " + score);
	GUI.Label (Rect(10, 40, 100, 20), "Shots: " + shots);
}