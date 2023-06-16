// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//   return x*x
// }

// const square = (x) => x*x
// console.log(square(12));

const event={
    name:'Birthday Party',
    guestList:['Merc','Shawl','Millet','Lexi','Takano'],
    printGuestList () {
        console.log('Guest list for '+this.name)
        this.guestList.forEach(function (guest){
            console.log(guest + ' is attending your birthday party');
        })
    }
}
event.printGuestList()