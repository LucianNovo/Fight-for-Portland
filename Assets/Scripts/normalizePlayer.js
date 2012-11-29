#pragma strict
//Get the position of the character
//Get the steepness of the terrain at that position
//pivot the character controller.
var charPosition: Transform;
var terrainStats: TerrainData;


function Start () {
	terrainStats = Terrain.activeTerrain.terrainData;
}

function Update () {
// 	terrainStats.GetStepness(charPosition.x,charPosition.y);
}