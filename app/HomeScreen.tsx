import Button from "@/components/buttons/Button";
import React from "react";
import Image from "next/image";
import xx99 from "@/public/header-home.png";

const HomeScreen = () => {
  return (
    <article>
      <header className="bg-dark-gray w-full">
        <div
          id="header-container"
          className="max-w-6xl my-0 mx-auto lg:flex lg:justify-between lg:flex-row-reverse items-center relative"
        >
          <div className="flex-1 relative h-[600px] md:h-[720px]">
            <Image
              src={xx99}
              alt="XX99 Mark II Headphones"
              fill
              className="object-cover lg:object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col gap-7 lg:gap-10 absolute lg:static px-4 lg:px-0 items-center lg:items-start left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0">
            <div className="gap-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="overline-gray opacity-50">NEW PRODUCT</p>
              <h1>XX99 Mark II HeadphoneS</h1>
              <p className="body-text max-w-sm opacity-75">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <Button variant="primary">new product</Button>
          </div>
        </div>
      </header>
    </article>
  );
};

export default HomeScreen;
