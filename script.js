class Person {
    name;
    surname;
    

    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
        
    }

    print(){
        console.log(`Name: ${this.name}  Surname: ${this.surname}`);
    }

    

}
let person = new Person('Nursultan', 'Asanov');



class User extends Person{
    #password;
    constructor(name, surname, password)
    {
        super(name, surname);
        this.#password = this.#checkPassword(password);
    }

    #checkPassword(password){
        if(password == '1234')
        {
             person.print();
        }
        else
        {
            console.log('Error');      
        }
 
     }
     
}

let user = new User('','', prompt(''));


