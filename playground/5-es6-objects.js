//Object property shorthand
const name = 'Merc';
const userAge = 27;
const user={
    name,
    userAge,
    location:'Lvshunko'
}

//Object destructuring
const product={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}
// const {label:productLabel,stock,rating=5}=product
// // console.log( productLabel);
// // console.log( stock);
const  transaction=(type, {label,stock})=>{
// // console.log(rating);
    console.log(type, label, stock);
}
transaction('order',product)