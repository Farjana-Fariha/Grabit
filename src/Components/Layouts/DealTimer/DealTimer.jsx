import React, { useEffect, useState } from "react";

const DealTimer = () => {
   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

   function calculateTimeLeft() {
     const targetDate = new Date();
     targetDate.setDate(targetDate.getDate() + 25);
 
     const difference = +targetDate - +new Date();
     let timeLeft = {};
 
     if (difference > 0) {
       timeLeft = {
         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
         minutes: Math.floor((difference / 1000 / 60) % 60),
         seconds: Math.floor((difference / 1000) % 60),
       };
     } else {
       timeLeft = {
         days: 0,
         hours: 0,
         minutes: 0,
         seconds: 0,
       };
     }
     return timeLeft;
   }
 
   useEffect(() => {
     const timer = setInterval(() => {
       setTimeLeft(calculateTimeLeft());
     }, 1000);
 
     // Cleanup interval on component unmount
     return () => clearInterval(timer);
   }, []);
 
   const formatTime = (value) => (value < 10 ? `0${value}` : value);
 
   // Check if timeLeft is defined before rendering
   if (!timeLeft || Object.keys(timeLeft).length === 0) {
     return <div className="bg-[#F8F8FB]"><p>Time's up!</p></div>;
   }
  return (
    <div className="">
      <div className=" bg-[#F8F8FB]"><p>{timeLeft.days} <span>Days</span> {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds} </p></div>
    </div>
  );
};

export default DealTimer;

/* 25 */

// position: absolute;
// width: 18.59px;
// height: 28px;
// left: 15px;
// top: 5px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 600;
// font-size: 15px;
// line-height: 28px;
// /* identical to box height, or 187% */
// display: flex;
// align-items: center;

// color: #4B5966;


