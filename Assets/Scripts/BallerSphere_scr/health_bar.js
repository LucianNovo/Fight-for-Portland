var damage : float = .05;
private var screenH: float = Screen.height;
private var screenW: float = Screen.width;
//health bar
private var healthBarPos : Vector2 = new Vector2((Screen.width * .5),(Screen.height *.05));
private var healthBarSize : Vector2 = new Vector2((Screen.width * .4),20);
var healthBarEmpty : Texture2D;
var healthBarFull : Texture2D;
var healthBarDisplay : float =1;
var collisions: int;

//charge bar
var chargeIncrement: float = .02;
private var chargeBarPos : Vector2 = new Vector2((Screen.width * .5),(Screen.height * .12));
private var chargeBarSize : Vector2 = new Vector2((Screen.width * .4),20);
var chargeBarEmpty : Texture2D;
var chargeBarFull : Texture2D;
var chargeBarDisplay : float = 0;

//power Bar
var recharge: float = .02;
private var powerBarPos :Vector2 = new Vector2((Screen.width * .1),(Screen.height * .9));
private var powerBarSize :Vector2 = new Vector2((Screen.width * .8),20);
var powerBarEmpty : Texture2D;
var powerBarFull : Texture2D;
var powerBarDisplay : float = 1;

//jumping abilities
var jumpSpeed: float= 100;
var thrustSpeed: float = 50;
var temp: float;
var gravity: float = 20.0;
private var jumpDirection : Vector3 = Vector3.zero;
private var moveDirection : Vector3 = Vector3.forward;
//moveDirection = Camera.main.transform.forward;
var controller: CharacterController;
var jump : int = 0;
var ycount : int = 0;
var camBam : Camera;
var curVect: Vector3;
var done: boolean;

function Start()
{
	controller = GetComponent(CharacterController);
}

function OnGUI()
{
    // draw the background for the health bar;
    GUI.BeginGroup (new Rect (healthBarPos.x, healthBarPos.y, healthBarSize.x, healthBarSize.y));
        GUI.Box (Rect (0,0, healthBarSize.x, healthBarSize.y),healthBarEmpty);

        // draw the filled-in part:
   	 GUI.BeginGroup (new Rect (0, 0, healthBarSize.x * healthBarDisplay, healthBarSize.y));
        
        GUI.Box (Rect (0,0, healthBarSize.x, healthBarSize.y),healthBarFull);
     GUI.EndGroup ();

    GUI.EndGroup ();
    
    
    // draw the background for the power bar;
    GUI.BeginGroup (new Rect (powerBarPos.x, powerBarPos.y, powerBarSize.x, powerBarSize.y));
        GUI.Box (Rect (0,0, powerBarSize.x, powerBarSize.y),powerBarEmpty);

        // draw the filled-in part:
   	 GUI.BeginGroup (new Rect (0, 0, powerBarSize.x * powerBarDisplay, powerBarSize.y));
        
        GUI.Box (Rect (0,0, powerBarSize.x, powerBarSize.y),powerBarFull);
     GUI.EndGroup ();

    GUI.EndGroup ();    

      
    // draw the background for the charge bar:
    GUI.BeginGroup (new Rect (chargeBarPos.x, chargeBarPos.y, chargeBarSize.x, chargeBarSize.y));
        GUI.Box (Rect (0,0, chargeBarSize.x, chargeBarSize.y),chargeBarEmpty);

        // draw the filled-in part:
   	 GUI.BeginGroup (new Rect (0, 0, chargeBarSize.x * chargeBarDisplay, chargeBarSize.y));
        
        GUI.Box (Rect (0,0, chargeBarSize.x, chargeBarSize.y),chargeBarFull);
     GUI.EndGroup ();

    GUI.EndGroup ();   
} 

function Update()
{
	if(healthBarDisplay<0){
		Destroy(gameObject);
		Debug.Log("OUT of HEALTH : You're dead. \n Because you got hit.");			
	}
	if (Input.GetKeyDown ("space") && (chargeBarDisplay < 1) && (powerBarDisplay > 0) && (powerBarDisplay > .05)){
        print ("charging");
        //increase the charge bar, decrease the power bar.
        chargeBarDisplay += .05;
        powerBarDisplay -= .05; 
	}
	//else increase the power bar.
	else if(powerBarDisplay < 1){
			powerBarDisplay += .0025;
	} 
	
	//jump upwards
	if(Input.GetKeyDown("j")){
		jumpDirection.y = jumpSpeed * chargeBarDisplay;
		chargeBarDisplay = 0;
	}
//	if(Input.GetKeyDown("k")){
//		temp = thrustSpeed;
//		moveDirection.x = temp;
//	}
	
//	temp -= .5 * Time.deltaTime;
	jumpDirection.y -= gravity * Time.deltaTime;
//	Debug.Log(moveDirection + " : Move Direction");
//	Debug.Log(jumpDirection + " : Jump Direction");	
	controller.Move(jumpDirection * Time.deltaTime);
//	controller.Move(moveDirection * Time.deltaTime);
}

//function diminishForwardForce(){
//	
//}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "bullet")
	{
		healthBarDisplay = healthBarDisplay - damage;
		collisions++;
		Debug.Log("HIT!!! : Collision number:  " + collisions);
		Destroy(other.gameObject);
		if(healthBarDisplay < 0){
			Debug.Log("DEAD, you're dead.");
			Destroy(gameObject); 
		}
	}
}

//	//moveDirection = Vector3(Input.GetAxis("Horizontal"),0,0);
//	//moveDirection = transform.TransformDirection(moveDirection);
//	//transform.position += moveDirection*Time.deltaTime; 
//	//Debug.Log(Input.GetAxis("Horizontal") + " rand: " + Random.Range(int.MinValue, int.MaxValue).ToString());
//	
//	//transform.position += Camera.main.transform.forward*Time.deltaTime;
//	curVect = Camera.main.transform.forward;
//	Debug.Log(Camera.main.transform.left);
//	
//	if(Input.GetKeyDown("j")){
//		Debug.Log("Jump " +jump + " triggered");
//		//moveDirection = Camera.main.transform.zero;
//		jumpDirection.y = jumpSpeed;
//		jumpDirection.y -= gravity * Time.deltaTime;
//		jump++;
//	}
////	if(Input.GetKeyDown("y")){
////		Debug.Log("y");
////		moveDirection = Camera.main.transform.right;
////		//moveDirection.x = -jumpSpeed;
////		//moveDirection.x = curVect.x;//	Debug.Log(Camera.main.transform.forward);
////		moveDirection.x -=gravity * Time.deltaTime;
////		ycount++;
////	}
////	if(Input.GetKeyDown("u")){
////		Debug.Log("u");
////		moveDirection = Camera.main.transform.right;
////		moveDirection.x *= -1;//jumpSpeed;
////		//moveDirection.x = curVect.x;//	Debug.Log(Camera.main.transform.forward);
////		moveDirection.x -=gravity * Time.deltaTime;
////	}
//	if(Input.GetKeyDown("k")){
//		Debug.Log("k");
//		jumpDirection.z = jumpSpeed;
//		done = false;	
//		//moveDirection.
//		//moveDirection.x = curVect.x;//	Debug.Log(Camera.main.transform.forward);
//		//moveDirection.x -=gravity * Time.deltaTime;
//		//InvokeRepeating("diminishForwardThrust",.1,9);
//	}
//	//transform.position += Vector3.forward*Time.deltaTime; 
//	//moveDirection.x -=gravity * Time.deltaTime;
//	//moveDirection.y -= gravity * Time.deltaTime;
//	//Debug.Log(moveDirection.x);
//	//Debug.Log(moveDirection.y);	
//	
//	moveDirection.y -= gravity * Time.deltaTime;
//	moveDirection.z -= gravity * Time.deltaTime;
//	if(moveDirection.z < 0){
//		done = true;
//	}
//	
//	controller.Move(moveDirection * jumpSpeed);
////	moveDirection.x -= gravity;
////	moveDirection.y -= gravity;
////	moveDirection.z -= gravity;