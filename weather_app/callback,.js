// setTimeout(() => {
//     console.log("two second up!!")
// } , 2000)

// const names = ["vansh" , "nene" , "sakshi" , "jim"]
// const shortNames = names.filter((name) => {
//     return name.length<=4
// })
// console.log(shortNames)

// const geocode = (address , callback) =>{
//     setTimeout(() => {
//         const data = {
//             latitude : 0,
//             longitude : 0
//         }
//         callback(data)
//     } , 2000)
// }

// geocode('jaipur' , (data) => {
//     // print = ans
//     console.log(data)
// })


const add = (first , second , callback ) => {
    setTimeout(()=>{
        const sum = first + second
        callback(sum)
    },2000)
}

add(1 , 4 , (m) =>{
    console.log(m)
    globalVA = m
})

