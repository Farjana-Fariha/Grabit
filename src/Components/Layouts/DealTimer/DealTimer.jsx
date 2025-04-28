import React, { useEffect, useState } from "react";

const DealTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  useEffect(()=>{
    const countdown = () => {
      setInterval(function(){
        let curr = new Date().getTime();
        let dest = new Date('june 12, 2025, 10:00:00').getTime();
        let diff = dest - curr;
        let days = Math.floor(diff/(1000*60*60*24));
        let hours = Math.floor(diff % (1000*60*60*24) / (1000 * 60 * 60));
        let mins = Math.floor(diff % (1000*60*60) / (1000 * 60));
        let secs = Math.floor(diff % (1000*60) / (1000));

        // Update the States 
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSecs(secs);
      },1000)
      return () => clearInterval(interval)
     }
  countdown()
  },[])

  return (
    <div className="max-w-[190px]">
      <div className=" w-full bg-[#F8F8FB] flex px-4 py-2 gap-2">
        <p className="text-[15px] font-semibold leading-[1.86] t-hue-dark ">{days}</p>
        <p className="text-[14px] font-normal leading-[2] tracking-[0.32px] t-hue-dark " >Days</p>
        <p className="text-[15px] font-semibold leading-[1.86] t-hue-dark ">{hours} :</p>
        <p className="text-[15px] font-semibold leading-[1.86] t-hue-dark ">{mins} :</p>
        <p className="text-[15px] font-semibold leading-[1.86] t-hue-dark ">{secs}</p>

      </div>
    </div>
  );
};

export default DealTimer;




