var barDisplay : float = 0;
var playerHealth : float = 100;
var pos : Vector2 = new Vector2(20,40);
var size : Vector2 = new Vector2(60,20);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;

function OnGUI()
{

    // draw the background:
    GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
        GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);

        // draw the filled-in part:
   	 GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay, size.y));
        
        GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
     GUI.EndGroup ();

    GUI.EndGroup ();
} 

function Update()
{
	if(barDisplay<0){
		Destroy(gameObject);
		Debug.Log("OUT of HEALTH : You're dead.");			
	}
}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "bullet")
	{
		barDisplay = barDisplay - .1;
		Debug.Log("HIT!!! : Collider Detected");
		Destroy(other.gameObject);
		if(barDisplay < 0){
			Destroy(gameObject); 
		}
	}
}