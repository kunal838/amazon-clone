import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {removeFromBasket, selectItems} from "../slices/basketSlice"

function CheckOutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
}) {
    const dispatch = useDispatch()
    const removeItem = ()=>{
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className="md:grid md:grid-cols-5 flex flex-col space-y-10">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* middle */}

      <div className="md:col-span-3 mx-5 justify-between ">
        <p className="text-xs line-clamp-3">{title}</p>
      </div>
      <p>{description}</p>
      <p className="font-semibold text-gray-700 bg-gray-200 w-20 p-2 rounded-2xl ">
        $ {price}
      </p>
      <button onClick={removeItem} className="buttom md:ml-auto">Remove Items</button>
      <div className="border-b-4 md:hidden" />



     
    </div>



    
  );
}

export default CheckOutProduct;
