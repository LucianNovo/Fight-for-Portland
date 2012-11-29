#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.BeginGroup(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 300, 250));
	GUI.Box (Rect(0, 0, 300, 250), "BallerSphere");
	
	
	GUI.Label(Rect(40, 30,240,30), "Shoot the Balls that orbit the mountain");
	GUI.Label(Rect(98, 50,240,30), "Space Bar to Fire");
	GUI.Label(Rect(30, 70,240,40), "Arrow Keys to Move, WASD to pivot turret");
	
	if (GUI.Button(Rect(75, 100, 150, 30), "Play")) {
		Application.LoadLevel ("scene1");
	}
	if (GUI.Button(Rect(50, 140, 200, 30), "Do something else")) {
		Application.Quit();
	}
	
	GUI.Label(Rect(30, 190,240,40), "Lucian Novosel is a Baller. All this work is copyright btw.");
	GUI.Label(Rect(60, 220,240,30), "Copyright(C) Lucian Novosel 2012");
	GUI.EndGroup();
}