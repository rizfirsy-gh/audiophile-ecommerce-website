import Button from "@/components/buttons/Button";
import React from "react";
import Image from "next/image";
import xx99 from "@/public/header-home.png";

const HomeScreen = () => {
  return (
    <article>
      <header className="bg-dark-gray w-full pt-8 lg:pt-32">
        <div
          id="header-container"
          className="max-w-6xl my-0 mx-auto lg:px-6 lg:flex lg:justify-between relative"
        >
          <div className="flex-1 flex flex-col gap-7 lg:gap-10 absolute lg:static px-4 lg:px-0 items-center lg:items-start left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0">
            <div className="gap-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="overline-gray opacity-50">NEW PRODUCT</p>
              <h1>XX99 Mark II HeadphoneS</h1>
              <p className="max-w-sm">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <Button variant="primary">new product</Button>
          </div>
          <div className="flex-1">
            <Image
              src={xx99}
              alt="XX99 Mark II Headphones"
              className="max-h-[720px] w-auto"
            />
          </div>
        </div>
      </header>
    </article>
  );
};

export default HomeScreen;
