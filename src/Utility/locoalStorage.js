// Saving Cart data  
const getCartData = () =>{
   let cartData = localStorage.getItem('cart-data');
   if(cartData){
      return JSON.parse(cartData);
   }return [];
}
const saveCartData =(currId)=>{
   const cartData = getCartData();
   const exist = cartData.find(id => id == currId)
   if(!exist){
      cartData.push(currId);
      localStorage.setItem('cart-data',JSON.stringify(cartData))
   }
}
export {getCartData,saveCartData}