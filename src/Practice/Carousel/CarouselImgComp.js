import React from "react";
import CarouselComp from "./CarouselComp";

const CarouselImgComp = () => {
  const imgUrl = [
    "https://media.istockphoto.com/id/669635764/photo/friends-spending-time-together-in-the-city.jpg?s=1024x1024&w=is&k=20&c=lPiCZg3C-hWvq68shijPCDkok_cw-ZD6XBghvtvPNHg=",
    "https://media.istockphoto.com/id/1435365492/photo/happy-students-sitting-in-cafe-table-of-university-and-doing-homework-or-writing-plans-young.jpg?s=1024x1024&w=is&k=20&c=WmQOFvpEjaQ9Iadk3o75yRmp6wQ3iJoupF-DdiWIUv0=",
    "https://media.istockphoto.com/id/1140019502/photo/young-male-waiter-bringing-an-order-to-couple-customer-enjoying-a-warm-drink-at-the-restaurant.jpg?s=1024x1024&w=is&k=20&c=GwmBl2Hpgi_jDCfjZO5muzxR2Xoz7MEZZrG239LuUpY=",
    "https://media.istockphoto.com/id/1140019384/photo/cheerful-latin-american-family-having-fun-talking-and-enjoying-a-breakfast-at-a-cafeteria.jpg?s=1024x1024&w=is&k=20&c=Heok6YtPyreYwJbrHkfo9p7QeP86v5KJeog595Bzmik=",
  ];
  return (
    <div>
      <CarouselComp images={imgUrl} />
    </div>
  );
};

export default CarouselImgComp;
