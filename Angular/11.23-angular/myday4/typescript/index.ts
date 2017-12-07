console.log(1)
let bool:boolean = false;
var num = 3;
let num1:string = "123"
let arr:string[] = ["1", "2", "3"]
let tuple:[string, number] = ["abc", 123]
let any:any  = 1;

let func = (a, b):void => {

}

let jj:void = undefined;
let kkk:void = null;
// let ss:void = 11;

var bo5 = 1;

class people{
  name:string
  skill:string
  constructor(name){
    this.name = name;
    this.skill = "ps"
  }
  getName(){
    return this.name
  }
}


interface objType{
  skill:string,
  bool:boolean,
  arr:string[]
}





let obj:objType = {
  skill:"px",
   bool:true,
   arr:["a", "b", "c"]
}
