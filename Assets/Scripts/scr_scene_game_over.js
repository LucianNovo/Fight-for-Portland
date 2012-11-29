#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.BeginGroup(Rect(Screen.width / 2 - 150, Screen.height / 2 - 50, 300, 170));
	GUI.Box (Rect(0, 0, 300, 200), "Game Over!!");
	GUI.Label(Rect(120, 30,240,30), "Score: " + PlayerPrefs.GetInt("score"));
	if (GUI.Button(Rect(75, 70, 150, 30), "Play Again")) {
		Application.LoadLevel ("scene1");
	}
	if (GUI.Button(Rect(75, 120, 150, 30), "Quit")) {
		Application.Quit();
	}
	GUI.EndGroup();
}