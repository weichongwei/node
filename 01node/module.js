function Dog(){
    let name;
    this.sayName = function(myName){
        name = myName;
    }
    this.sayHello = function(){
        console.log(name+'hello');
    }
}

module.exports = Dog