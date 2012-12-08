var menuSkin : GUISkin;
var areaWidth : float;
var areaHeight : float;
var SetYet: boolean;

function OnGUI()
{
	if(SetYet != true){	
		GUI.skin = menuSkin;
		var screenX = Screen.width * 0.5 - areaWidth * 0.5;
		var screenY = Screen.height * 0.5 - areaHeight * 0.5;
		GUILayout.BeginArea(Rect(screenX, screenY, areaWidth, areaHeight));
		if (GUILayout.Button("Play")) {
			OpenLevel("Main");
			SetYet = true; 
		}
		if (GUILayout.Button("I'm a total newb.")) {
			OpenLevel("intro_scene");
			SetYet = true;
		}
		if (GUILayout.Button("Quit")) {
			Application.Quit();
			SetYet = true;
		}
		GUILayout.EndArea();
	}
}

function OpenLevel (level : String)
{
	yield new WaitForSeconds(0.35);
	Application.LoadLevel(level);
}

//@script RequireComponent(AudioSource)

