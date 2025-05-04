class User{
    constructor(email , password){
         this.email = email
         this.password = password
    }
    get email(){
        return this._email.toLowerCase()
    }
    set email(mail){
          this._email = mail
    }


    get password(){
        return this._password.toUpperCase()
    }
   set password (value){
    this._password = value.toUpperCase()
   }
}

const chai = new User("h@hitesh.ai", "123acf")
console.log(chai.password);
console.log(chai.email);


// IN Older version  property base get set

function hitesh(email , password){
        this._email = email
        this._password = password

    Object.defineProperty(this , 'email' ,{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const babu = new hitesh ("chai@gmail.ai" , "cahi")
 console.log(babu.email);
 

 // in Object get set 

 const obj = {
    _email:"n@ni.ai" ,
    _password :"chai",


    get email (){
          return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
         
 }

 const lala = Object.create(obj)
 console.log(obj.email);
 