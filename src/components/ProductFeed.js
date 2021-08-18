import Products from "./Products";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-32 mx-auto ">
      
      {products.slice(0,6).map((product) => (
        <Products key={product.id} product={product} />
      ))}
     
     
     
      <img className="  md:col-span-full" src="https://links.papareact.com/dyz" />
    
    
      <div className="md:col-span-2">
       {products.slice(4,5).map((product) => (
        <Products key={product.id} product={product} />
      ))}
  </div>
  {products.slice(5,products.length).map((product) => (
        <Products key={product.id} product={product} />
      ))}
    
    </div>

    
  );
 
}

export default ProductFeed;
