let person = {
    name:'Logan',
    age: 27,
    inClass: true,
    classesTaught: ['Javascript','arrays','objects']
}

person.hasGlasses = true; // add new property
console.log(person)

person.age = 33 // edit
console.log(person)


// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf('age') > -1
// console.log(hasAge)


// let {name,age} = person
//console.log(person['classesTaught'][0])
// console.log(name)
// console.log(age)

// person.name = 'McCalley'
// console.log(person.name)

// console.log(person)
// delete person.name
// console.log(person)
