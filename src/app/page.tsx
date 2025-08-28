"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AddProducts from "./_components/AddProducts";
import Products from "./_components/Products";
import Cart from "./_components/Cart";

type products = {
  productName: string;
  price: number;
  stock: number;
  id: number;
};

type inputValues = {
  productName: string;
  price: number;
  stock: number;
};
type newCardProductType = {
  name: string;
  productPrice: number;
  id: number;
  count: number;
};

type totalNumType = {
  sum: number;
};
function Page() {
  const [total, setTotal] = useState<totalNumType>(0);
  const [products, setProducts] = useState<products[]>([]);
  const [newCardProduct, setnewCardProduct] = useState<newCardProductType[]>(
    []
  );
  const [inputValues, setIputValues] = useState<inputValues>({
    productName: "",
    price: 0,
    stock: 0,
  });
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const addproducts = () => {
    if (inputValues.price === 0) return;
    if (inputValues.productName === "") return;
    if (inputValues.stock === 0) return;
    setProducts([
      ...products,
      {
        productName: inputValues.productName,
        price: inputValues.price,
        stock: inputValues.stock,
        id: Date.now(),
      },
    ]);
  };
  const addproducts2 = (product: products) => {
    const atId = product.id;
    const filteredProduct = products.filter((product) => product.id !== atId);
    setProducts([
      ...filteredProduct,
      {
        ...product,
        stock: Number(product.stock) - 1,
      },
    ]);

    const newCardProduct = {
      name: product.productName,
      productPrice: product.price,
      id: product.id,
      count: 1,
    };
    console.log(newCardProduct);
  
    setnewCardProduct((prev) => {
      const sameId = prev.find(
        (prevProduct: newCardProductType) =>
          prevProduct.id === newCardProduct.id
      );
      if (sameId) {
        return prev.map((prevProduct) => {
          return prevProduct.id === newCardProduct.id
            ? { ...prevProduct, count: Number(prevProduct.count) + 1 }
            : prevProduct;
        });
      } else {
        return [...prev, newCardProduct];
      }
    });
  };
  const deleteBtn = (id: number) => {
    const filtered = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filtered);
    const filteredCart = newCardProduct.filter((cartProduct) => {
      return cartProduct.id !== id;
    });
    setnewCardProduct(filteredCart);
  };

  const totalNum = (total: newCardProductType) => {
    let sum = 0;
     sum = sum + total.productPrice * total.count ;
     setTotal(sum)
    console.log(sum, "total");
  };

  console.log(newCardProduct, "card");
  return (
    <div className="ml-7 mt-5 ">
      <div className="text-center text-2xl font-bold">Product Store</div>
      <div className="flex justify-center">
        <div className="w-[850px] h-[140px] bg-gray-200 rounded-sm p-4 mt-5 shadow-xl/20">
          <div className="font-bold text-2xl mb-3">Add Product</div>
          <div className="flex gap-6 ">
            <Input
              className="w-[270px] h-[37px] border-1 border-black"
              placeholder="Product Name"
              name="productName"
              value={inputValues.productName}
              onChange={(e) => handleInputValue(e)}
            />
            <Input
              className="w-[270px] h-[37px] border-1 border-black"
              placeholder="Price"
              name="price"
              value={inputValues.price}
              onChange={(e) => handleInputValue(e)}
            />
            <Input
              className="w-[270px] h-[37px] border-1 border-black"
              placeholder="Stock"
              name="stock"
              value={inputValues.stock}
              onChange={(e) => handleInputValue(e)}
            />
            <Button
              variant="outline"
              onClick={addproducts}
              className="bg-blue-400 text-white hover:bg-blue-700 hover:text-white"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-20 justify-center mt-5">
        <div>
          <div>
            <div className="font-bold text-2xl">
              Products ({products.length})
            </div>
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-[400px] h-[120px] border-1 border-gray-800 rounded-sm pt-2 pl-2 mb-4 shadow-xl"
                >
                  <div className="flex gap-30">
                    <div className="text-2xl">{product?.productName}</div>
                    <div className="flex gap-3 ">
                      <Button className="text-blue-400 border border-blue-300 bg-white hover:bg-blue-800 hover:text-white">
                        Edit
                      </Button>
                      <Button
                        onClick={() => deleteBtn(product.id)}
                        className="text-red-500 border border-red-500 bg-white hover:bg-red-800 hover:text-white"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="flex gap-1.5">
                      <div className="text-gray-500">${product?.price}</div>
                      <div>*</div>
                      <div className="text-gray-500">
                        Stock : {product?.stock}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-green-400 hover:bg-green-800"
                    onClick={() => addproducts2(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl">
            Cart ( {newCardProduct.length} items)
          </div>
          <div className="border-1 border-black rounded-sm shadow-xl">
            {newCardProduct.map((product, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-40 p-3 justify-between">
                    <div>
                      <div className="text-2xl">{product.name}</div>
                      <div className="text-gray-500">
                        ${product.productPrice} each
                      </div>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Input
                        type="number"
                        className="w-[60px] h-[35px] border-1 border-black"
                        value={product.count}
                      />
                      <div className="mt-2">
                        ${product.productPrice * product.count}
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr className="border-t border-black mt-2 ml-4 mr-4"></hr>
                    <hr className="border-t border-black mt-2 ml-4 mr-4"></hr>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between p-4">
              <div className="font-bold">Total:</div>
              <div className="font-bold">$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
