import Image from "next/image";
import { useSelector } from "react-redux";
import CheckOutProduct from "../components/CheckOutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

function Checkout() {
    const items = useSelector(selectItems)
    return (
        <div className="bg-gray-100 h-screen">
            <Header/>
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* left */}
                <div className="flex-grow m-5 shadow-2xl rounded-xl">
                    <Image
                    src="https://links.papareact.com/ikj"
                    height={250}
                    width={1020}
                    objectFit="cover"
                    />

                    <div className="flex flex-col p-5 space-y-10 bg-white rounded-xl">
                        <h1 className="text-3xl font-medium border-b pb-4">
                            {items.length === 0 ?'Your Amazon basket is empty.':'Shopping basket'}
                        </h1>


                        {items.map((item,i)=>(
                           <CheckOutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                           />
                        ))}

                    </div>
                </div>

            </main>
           
        </div>
    )
}

export default Checkout
