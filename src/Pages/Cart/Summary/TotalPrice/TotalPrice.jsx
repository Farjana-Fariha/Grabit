import  {useContext,useState,useEffect} from "react";
import {CartContext} from "../../Cart.jsx"

const TotalPrice = () => {
    const [appliedCoupon, setAppliedCoupon] = useState("")
    const [couponErr, setCouponErr] = useState(null)
    const [total, setTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [isCouponApplied, setIsCouponApllied] = useState(false)
    const {ItemsTotal} = useContext(CartContext)
    useEffect(()=>{
    setTotal(ItemsTotal)
    },[ItemsTotal])
    const deliveryCharge = 2;
    let afterAppliedcoupon;
  const handleCoupon = ()=> {
    const coupon = "discount10%";
    if(coupon == appliedCoupon){
      afterAppliedcoupon = (total - (total*0.1));
      setTotal(afterAppliedcoupon)
      setCouponErr(false)
     setDiscount(total*0.1)
     setIsCouponApllied(true)
    }else{
      setCouponErr(true)
    }
  }
    const grandTotal = total + deliveryCharge;
  return (
    <div className="mt-[26px]">
      <p className="flex justify-between pb-[10px]">
        <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Sub-Total</span>
        <span className="font-medium text-[14px] leading-[1.7] t-hue-dark tracking-[0.32px]">${total}</span>
      </p>
      <p className="flex justify-between pb-[10px]">
        <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Delivery Charges</span>
        <span className="font-medium text-[14px] leading-[1.7] t-hue-dark tracking-[0.32px]">${deliveryCharge}</span>
      </p>
      <div >
      <span className="font-medium text-[14px] leading-[1.7] t-hue-dark mb-2">Apply for Discount:</span>
      <p className="flex items-center  border border-[#5CAF90] max-w-[350px]">
        <input disabled={isCouponApplied} placeholder="Type discount10%" onChange={(e)=>{setAppliedCoupon(e.target.value)}} className='p-2 border-0 end flex-1' type="text" />
        <button disabled={isCouponApplied} onClick={handleCoupon} className="font-normal text-[14px] leading-[1.7] text-white tracking-[0.32px] bg-[#5CAF90] px-3 py-2 ">Apply Coupon</button>
      </p>
    {
      couponErr == false && (
      <p className="font-medium text-[14px] leading-[1.7] text-success mt-1">Applied Coupon Successfully!! <span className="text-[#5CAF90]">Saved ${discount}</span></p>
      )
    }
    {
      couponErr == true && (
        <p className="font-medium text-[14px] leading-[1.7] text-red-400 mt-1">Invalid Coupon Code!!</p>
      )
    }
      </div>
      <hr className="text-[#EEEEEE] mt-[18px]" />
      <p className="flex justify-between  pt-[20px]">
        <span className="font-medium text-[16px] leading-[1.5] t-hue-dark">Total Amount</span>
        <span className="font-medium text-[14px] leading-[1.5] t-hue-dark tracking-[0.32px]">${grandTotal}</span>
      </p>
    </div>
  );
};

export default TotalPrice;
