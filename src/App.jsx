import ProductCard from "./components/cards/ProductCard";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiSquareMinus } from "react-icons/ci";
import { useEffect, useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);
  const products = [
    {
      name: "Product 1",
      price: "$10",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is product 1",
      rate: "4.5/5",
      quantity: 1,
    },
    {
      name: "Product 2",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is product 2",
      rate: "4.0/5",
      quantity: 1,
    },
    {
      name: "Product 3",
      price: "$10",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is product 1",
      rate: "4.5/5",
      quantity: 1,
    },
    {
      name: "Product 4",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1284&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is product 2",
      rate: "4.0/5",
      quantity: 1,
    },
  ];

  const handleAdd = (item) => {
    console.log("item clicked", item);
    setQuantity(item.quantity + 1);
  };

  const handleRemove = (item) => {
    if (item.quantity > 0) {
      setQuantity(item.quantity - 1);
    }
  };
  useEffect(() => {
    setQuantity(100);
  }, []);

  return (
    <div>
      <span className="bg-green-400 text-green-800 shadow-md rounded-md px-4 py-7 flex flex-col gap-2 border border-slate-50">
        <h1 className="text-3xl font-bold text-green-900">Product List</h1>
      </span>

      <div className="grid grid-cols-3 gap-4 my-4 mx-6">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            rate={item.rate}
            className={"flex flex-col gap-2"}
          >
            <div className="flex justify-between items-center gap-2">
              {" "}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Order Now
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
            <div className="flex justify-between items-center gap-2 bg-white p-4 border border-red-300 roundend-lg">
              <span
                className="w-fit flex items-center gap-2 bg-green-300 text-green-700 p-2 rounded-md"
                onClick={() => handleAdd(item)}
              >
                <IoAddCircleOutline size={20} />
                Add
              </span>
              <span className="w-fit flex items-center gap-2 font-bold bg-yellow-300 text-yellow-700 py-2 px-7 rounded-md">
                {quantity}
              </span>
              <span
                className="w-fit flex items-center gap-2 bg-green-300 text-green-700 p-2 rounded-md"
                onClick={() => handleRemove(item)}
              >
                <CiSquareMinus size={20} />
                Remove
              </span>
            </div>
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;
