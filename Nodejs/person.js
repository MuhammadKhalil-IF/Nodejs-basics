// const personData={
//     name: "khalil",
//      age:27
// }



/**
Module Raper functions
*/



class person {
    constructor (name, age){
       this.name=name;
       this.age=age;
    }
 personRecord() {
        console.log(`these values coming from constuctor and My name is ${this.name} and age is s${this.age}`);

        return "Done"
}


}




module.exports=person 