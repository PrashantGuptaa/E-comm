import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";
import productsData from "../../mockData/productsData.json";
import ProductCard from "./productCard";
import { Typography } from "@mui/material";

const ProductScreen = () => {
  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (id) => {
    console.log("Adding new product");
    const productsCopy = [...products];
    productsCopy.forEach((productsObj) => {
      const { lists } = productsObj;
      lists.forEach((item) => {
        if (item.id === id) {
          item.quantityPurchased = item.quantityPurchased + 1;
        }
      });
    });
    setProducts(productsCopy);
  };

  const handleRemoveProduct = (id) => {
    console.log("Adding new product");
    const productsCopy = [...products];
    productsCopy.forEach((productsObj) => {
      const { lists } = productsObj;
      lists.forEach((item) => {
        if (item.id === id && item.quantityPurchased > 0) {
          item.quantityPurchased = item.quantityPurchased - 1;
        }
      });
    });
    setProducts(productsCopy);
  };

  return (
    <div className="products-container ">
      {products.map((product) => {
        const { category, lists } = product;
        return (
          <>
            <Typography variant="h6" className="capitalize">
              {category}
            </Typography>
            <div className="products">
              {lists.map((listObj) => {
                const { name, price, image, quantityPurchased, id } = listObj;
                return (
                  <ProductCard
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    image={image}
                    quantityPurchased={quantityPurchased}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductScreen;
