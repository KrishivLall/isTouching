function isTouching(objt1,objt2){
    if(objt1.x - objt2.x < objt1.width/2 + objt2.width/2 &&
       objt2.x - objt1.x < objt1.width/2 + objt2.width/2 &&
       objt1.y - objt2.y < objt1.height/2 + objt1.height/2 && 
       objt2.y - objt1.y < objt1.height/2 + objt1.height/2 ){
         return true;
       }
       else {return false}
    }