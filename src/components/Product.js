import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";

const Product = ({ id, title, price, description, category, image }) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="text-amazon_blue relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-gray-400 text-xs italic">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 font-bold text-amazon_blue-light">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="font-bold mb-5">
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <div>{value}</div>}
        />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="https://links.papareact.com/fdw"
            alt="prime"
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to cart</button>
    </div>
  );
};

export default Product;
