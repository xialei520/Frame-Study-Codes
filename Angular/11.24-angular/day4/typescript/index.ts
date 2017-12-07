console.log(1)
let bool: boolean = false
let num: number = 1
let str: string = "abc"
let arr: number[] = [0, 1, 2]
let tuple: [string, boolean] = ["abc", false]
let any: any = 1
let func = (a, b): void => {
  //return a+b
}
var add = function(a,b){

}
var bo5 = 1
func(1,2)
class people {
  name: string
  skill: string
  constructor(name) {
    this.name = name
    this.skill = "ps"
  }
  getName() {
    return this.name
  }
}

interface objType{
  skill:string,
  bool:boolean,
  arr:string[]
}
let obj:objType = {
  skill:"ps",
  bool:true,
  arr:["a","b","c"]
}
