/*
                                   *Read*
                                 *IMPORTANT*
If you are using this library in your own project please give credit at the top of the code of your project with a link to this library and a link to my profile.

 What is ApriLib.js?
=====================
 
 - This is a javascript library with easy-to-use javascript commands.
 
=====================

 GitHub Link
=============
 
 - https://github.com/Herofied1180/ApriLib-JSLib.git
 
=============

 Quick Guide
=============
 
 Use:
 
  - To use this in your own projects, make a spin-off of this. Please don't copy and paste this code without credit like a link to this code, and a link to my profile.
  
 What's New:
 
 - LibVersion Function
  
=============

 Coming Soon...
================
 
 - Nothing :(
 
================

*/

//The ApriLib code function
/*
NOTE:
This function has already been pre-defined, so please do NOT re-define this function's code, or your program might become messed up and the code won't work.
*/


//The Square function's pre-defined variable
var Square = null;

//The RadiusSquare function's pre-defined variable
var RadiusSquare = null;

//The Circle function's pre-defined variable
var Circle = null;

//The Line function's pre-defined variable
var Line = null;

//The Text function's pre-defined variable
var Text = null;

//The TextSize function's pre-defined variable
var TextSize = null;

//The TextWidthHeight function's pre-defined variable
var TextWidthHeight = null;

//The LibVersion function's pre-defined variable
var LibVersion = null;

//Global variables
var aprVar = {
    
    //Is the program enabled?
    enabled: true,
    
    //Square function's variables
    SquareVar: {
        
        //Is the Square function enabled?
        enabled: true
        
    },
    RadiusSquareVar:{
        
        //Is the RadiusSquare function enabled?
        enabled: true
        
    },
    
    //Circle function's varaiables
    CircleVar: {
        
        //Is the Circle function enabled?
        enabled: true
        
    },
    
    //Line function's variables
    LineVar: {
        
        //Is the Line function enabled?
        enabled: true
        
    },
    
    //Text function's variables
    TextVar:{
        
        //Is the Text function enabled?
        enabled: true
        
    },
    
    TextSizeVar: {
        
        //Is the TextSize function enabled?
        enabled: true
        
    },
    
    //TextWidthHeight function's variables
    TextWidthHeightVar: {
        
        //Is the TextWidthHeight function enabled?
        enabled: true
        
    },
    
    //LibVersion function's variables
    LibVersionVar: {
        
        //Is the LibVersion function enabled?
        enabled: true
        
    }
    
//The aprVar variable's end
};

var ApriLib = function(){

//Functions

//Square function

//Check if the Square function is enabled
if (aprVar.SquareVar.enabled === true){

//Create function "Square"
Square = function(x, y, width, height){
    
    //Square function's code
    rect(x, y, width, height);
    
//Square function's function definition end
};

//Square function's if statement end
}

//Check if the RadiusSqaure function is enabled
if (aprVar.RadiusSquareVar.enabled === true){
    
//Create function "RadiusSquare"
RadiusSquare = function(x, y, width, height, radius){
    
    //RadiusSquare function's code
    rect(x, y, width, height, radius);
    
//RadiusSquare function's definiton end
};
    
//RadiusSquare function's if statement end
}

//Check if the Circle function is enabled
if (aprVar.CircleVar.enabled === true){
//Create funciton "Circle"
Circle = function(x, y, width, height){
    
    //Circle function's code
    ellipse(x, y, width, height);
    
//Circle function's definition end
};

//Circle function's if statement end
}

//Check if the Line funciton is enabled
if(aprVar.LineVar.enabled === true){

//Create funciton "Line"
Line = function(x1, y1, x2, y2){
    
    //Line function's code
    line(x1, y1, x2, y2);
    
//Line funciton's definition end
};

//Line function's if statement end
}

//Check if the Text function is enabled
if (aprVar.TextVar.enabled === true){

//Create function "Text"
Text = function(message, x, y){
    
    //Text function's code
    text(message, x, y);
    
//Text function's definiton end
};

//Text function's if statement end
}

//Check if the TextSize function is enabled
if (aprVar.TextSizeVar.enabled === true){

//Create function "TextSize"
TextSize = function(size){
    
    //TextSize function code
    textSize(size);
    
//TextSize funciton definiton end
};

//TextSize function if statement end
}

//Check if the TextWidthHeight function is enabled
if (aprVar.TextWidthHeightVar.enabled === true){

//Create function "TextWidthHeight"
TextWidthHeight = function(message, x, y, width, height){
    
    //TextWidthHeight function's code
    text(message, x, y, width, height);
    
//TextWidthHeight function definition end
};

//TextWidthHeight function if statement end
}

//Check if the LibVersion function is enabled
if (aprVar.LibVersionVar.enabled === true){

//Create function "LibVersion"
LibVersion = function(){
    
    println("ApriLib.js 0.4");
    noLoop();
    
//LibVersion function's definition end
};

//LibVersion function's if statement end
}
//ApriLib code function end
};

//Activates ApriLib.js
ApriLib();
