import axios from "axios";
import React, { createContext, useContext, useState, } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);
const ProductContext = ({ children }) => {
  let API_PRODUCTS = "http://localhost:3000/products";

  const [product, setProduct] = useState([]);



  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCTS);
    setProduct(data);
  }
  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }


  const {page, setPage} = useState(1)
  const itemPage = 2;
  const count = Math.ceil(product.length / itemPage)


  function currentPage(){
    const next = (page - 1) * itemPage;
    const prev = next / itemPage;

  }

  let values = {
    deleteProduct,
    addProduct,
    readProduct,
    product,
    setPage,count,currentPage
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
