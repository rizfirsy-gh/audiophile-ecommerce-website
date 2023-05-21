import Button from "@/components/buttons/Button";
import React from "react";
import Image from "next/image";
import xx99 from "@/public/header-home.png";
import headphoneSmall from "@/public/images/small/headphone-small.png";
import speakerSmall from "@/public/images/small/speaker-small.png";
import earphoneSmall from "@/public/images/small/earphone-small.png";

const dummyCategories = [
  {
    productName: "headphones",
    image: headphoneSmall,
  },
  {
    productName: "speakers",
    image: speakerSmall,
  },
  {
    productName: "earphones",
    image: earphoneSmall,
  },
];

const CategoriesCard: React.FC<{ image: any; productName: string }> = ({
  image,
  productName,
}) => {
  return (
    <div className="relative bg-light-gray w-full md:w-[223px] lg:w-[350px] h-40 lg:h-[204px] rounded-lg flex flex-col gap-4 justify-between  items-center pb-7">
      <Image
        src={image}
        alt={productName}
        className="object-contain absolute -translate-y-3/4 w-1/4"
      />
      <h6>{productName}</h6>
      <Button variant="tertiary">shop</Button>
    </div>
  );
};

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
            <div className="text-white gap-6 flex flex-col items-center lg:items-start text-center lg:text-left">
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
      <section className="bg-white max-w-6xl my-0 mx-auto">
        <div className="pt-10 pb-[120px] md:py-24 lg:py-36 px-4 md:px-0 flex flex-col md:flex-row w-full justify-center items-center gap-16 md:gap-2 lg:gap-7">
          {dummyCategories.map((category, index) => (
            <CategoriesCard
              key={index}
              image={category.image}
              productName={category.productName}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default HomeScreen;
