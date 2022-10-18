import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import {addToBasket} from '../slices/basketSlice'
const MIN_RATING = 5;
const MAX_RATING = 1;
function Products({ product }) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const addItemsToBasket = () =>{
    const products = {
      id:product.id,
      title:product.title,
      price:product.price,
      description:product.description,
      category:product.category,
      image:product.image
    }
    dispatch(addToBasket(products))

  }
  return (
    <div className=" relative shadow-2xl rounded-xl flex flex-col m-3 md:m-5 bg-white z-30 p-5 md:p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{product.category}</p>
         <Image src={product.image} height="200" width="200" objectFit="contain" />
      <h4 className="md:my-3">{product.title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-sm my-2 line-clamp-2 "  > {product.description}</p>

      <div className="mb-5">
         $ {product.price}

      </div>

      <button onClick={addItemsToBasket} className="mt-auto buttom">Add to Basket</button>
    </div>
  );
}

export default Products;
