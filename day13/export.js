export  function addTwoNumber (a,b){
return a+b ;

}


export  function subTract (a,b){
    return a-b ;
    
    }

    export  function multi (a,b){
        return a*b ;
        
        }

export const  person = {
     name : "rakesh rudi" ,
     age:"98" ,
     sex:"female" ,
     getName : function(){
         console.log(this.name) ;
     }
}


function deafultFunction(){
    console.log("hello , i'am deafult function ")
}



 export const PI = 3.14 ;
  export const THETA = 90 ;
  export function printHello(){
console.log("Hello")
 }


 export function Bundle1(){

    console.log("this is the function of bundle 1 ")
 }


 
 export function Bundle2(){

    console.log("this is the function of bundle 2 ")
 }
 
export   default deafultFunction ; 