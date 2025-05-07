// Saving Cart data  
const getCartData = () =>{
   let cartData = localStorage.getItem('cart-data');
   if(cartData){
      return JSON.parse(cartData);
   }return [];
}
const saveCartData =(currId, quantity = 1)=>{
   const cartData = getCartData();
   const exist = cartData.find(item => item.id == currId)
   if(exist){
      exist.quantity = quantity;
   }else{
      cartData.push({id:currId, quantity});
   }
   localStorage.setItem('cart-data',JSON.stringify(cartData))
}
export {getCartData,saveCartData}