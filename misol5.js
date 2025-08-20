







const database ={
    studendsList: {
        "abrorbek":{
            name: "abrorbek",
            age: 19,
            id: 123,
            tolov: false
        }
    },
    create(user){
        this.studendsList[user.name] = user
        // console.log(this.studendsList);
        
        // yangi userni studentsListga qushsin va studentsListni qaytarib bersin

    },
    read(name){
        // console.log(this.studendsList.abrorbek);
        console.log(this.studendsList.name);
        
        
        // userni studentsListdan topib qaytarib bersin

    },
    update(name, user){
        // studentsListdagi userni ichidagi malumotni uzgartiring va qaytaring

    },
    delate(name){
        // studentsListdan faqat bitta userni uchiring! qaytarish ihtiyoriy message qaytarsish ihtiyoriy 
        // delate this.studendsList["abrorbek"]
    }
}



database.create({
    name: "abrorbek",
    age: 19,
    id: 123,
    tolov: false
})
database.update("abrorbek", {
    name: "azizbek",
    age: 12,
    tolov: true
})

database.delate("abrorbek")

console.log(database.studendsList);
