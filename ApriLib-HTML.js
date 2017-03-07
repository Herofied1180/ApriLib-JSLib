/*
                                   *Read*
                                 *IMPORTANT*
If you are using this library in your own project please give credit at the top of the code of your project with a link to this library and a link to my profile.
   Credits
=============
 
 Init Code:
  - TemporalFuzz (@maxzman14)
  
 
=============

 What is ApriLib.js?
=====================
 
 - This is a javascript library with easy-to-use javascript commands.
 
=====================

   Links
=============
 
 Profile:
  
  - http://www.khanacademy.org/profile/AbundaSoft
  
 GitHub:
  
  - https://github.com/Herofied1180/ApriLib-JSLib/master/ApriLib-HTML.js
  
 
=============

 Quick Guide
=============
 
 Use:
 
  - To use this in your own projects, make a spin-off of this. Please don't copy and paste this code without credit like a link to this code, and a link to my profile.
  
 What's New:
 
 - Minor Bug Fixes
  
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

//The library's init code
var lib = {
  canvas: null,//The canvas to apply commands to
  pI: null,//The processing instance to apply the commands with
  programID: null,
  chars: "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|\\'\":;<,>./?".split(""),
  onKA: (document.location.origin === "https://www.kasandbox.org"),
  localStorage: null,
  
  init: function(Processing, canvas, ID) {
  /* @Author: TemporalFuzz (@maxzman14)
   * @Param Processing (Object): The Processing object (from the Processing.js library), passed as an argument so as not to cause errors.
   * @Param canvas (Canvas Element): The canvas for the Toolkit to act on.
   * @Description: Initializes and configures the library
   * @Revisions: None
  */
  if(typeof ID !== "number") { console.log("INVALID ID"); return; }
  lib.canvas = canvas;
  lib.pI = new Processing(lib.canvas);
  lib.programID = ID;
  lib.localStorage = localStorage;
  },


//The Square function's pre-defined variable
Square: null,

//The RadiusSquare function's pre-defined variable
RadiusSquare: null,

//The Circle function's pre-defined variable
Circle: null,

//The Line function's pre-defined variable
Line: null,

//The Text function's pre-defined variable
Text: null,

//The TextSize function's pre-defined variable
TextSize: null,

//The TextWidthHeight function's pre-defined variable
TextWidthHeight: null,

//The LibVersion function's pre-defined variable
LibVersion: null,

//The IsTapped funciton's pre-defined variable
IsTapped: null,

//Global variables
aprVar: {
    
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
        
    },
    
    //IsTapped function's variables
    IsTappedVar: {
        
        //Is the Lib Version function enabled?
        enabled: true
        
    }
    
//The aprVar variable's end
},

ApriLib: function(){

//Functions

//Square function

//Create function "Square"
Square: function(x, y, width, height){
    
    //Square function's code
    return(x, y, width, height);
    rect(x, y, width, height);
    
//Square function's function definition end
},
    
//Create function "RadiusSquare"
RadiusSquare: function(x, y, width, height, radius){
    
    //RadiusSquare function's code
    return(x, y, width, height, radius);
    rect(x, y, width, height, radius);
    
//RadiusSquare function's definiton end
},

//Create funciton "Circle"
Circle: function(x, y, width, height){
    
    //Circle function's code
    return(x, y, width, height);
    ellipse(x, y, width, height);
    
//Circle function's definition end
},

//Create funciton "Line"
Line: function(x1, y1, x2, y2){
    
    //Line function's code
    return(x1, y1, x2, y2);
    line(x1, y1, x2, y2);
    
//Line funciton's definition end
},

//Create function "Text"
Text: function(message, x, y){
    
    //Text function's code
    return(message, x, y);
    text(message, x, y);
    
//Text function's definiton end
},

//Create function "TextSize"
TextSize: function(size){
    
    //TextSize function code
    return(size);
    textSize(size);
    
//TextSize funciton definiton end
},

//Create function "TextWidthHeight"
TextWidthHeight: function(message, x, y, width, height){
    
    //TextWidthHeight function's code
    return(message, x, y, width, height);
    text(message, x, y, width, height);
    
//TextWidthHeight function definition end
},

//Create function "LibVersion"
LibVersion: function(){
    
    println("ApriLib.js 0.6");
    noLoop();
    
//LibVersion function's definition end
},

//Create function "IsTapped"
IsTapped: function(objectX, objectY, objectWidth, objectHeight){
    
    //IsTapped function's code
    mouseClicked = function(){
    return(objectX, objectY, objectWidth, objectHeight);
    if (mouseX < objectX+objectWidth && mouseX > objectX && mouseY < objectY+objectHeight && mouseY > objectY){
    aprVar.IsTappedVar.IsTapped = true;
    
    }
    
    
},
}

//ApriLib code function end
};

//Activates ApriLib.js
lib.ApriLib();
  
};

//Activates lib.init
lib.init(Processing, document.getElementById("canvas"), 4820088964841472);
