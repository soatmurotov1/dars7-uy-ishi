











let users = [
    {name: "John", email: "john@example.com"},
    {name: "Jason", email: "jason@example.com"},
    {name: "Jeremy", email: "jeremy@example.com"},
    {name: "Jacob", email: "jacob@example.com"},
    {name: "abrorbek", email: "abrorbek@example.com"},
    {name: "jasur", email: "jasur@gmail.com"},
    {name: "bekzod", email: "bekzod@example.com"}
]
let user =[]

for(let i=0; i< users.length; i++){
    user.push(users[i].name)
    
}

console.log(user);  
// should log ["John", "Jason", "Jeremy", "Jacob"]

