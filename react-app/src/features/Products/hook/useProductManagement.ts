import { useEffect, useState } from "react";

import apiClient from "../../../axios-config";
import { IProducts } from "../types";

const useProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get("produtos");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = async (newProduct: IProducts) => {
    setLoading(true);
    try {
      await apiClient.post("produtos", newProduct);
      fetchProducts();
    } catch (error) {
      console.error("Error adding client:", error);
    } finally {
      setLoading(false);
    }
  };

  const editProduct = async (productId: number, updatedProduct: IProducts) => {
    setLoading(true);
    try {
      await apiClient.put(`produtos/${productId}`, updatedProduct);
      fetchProducts();
    } catch (error) {
      console.error("Error editing client:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (productId: number) => {
    setLoading(true);
    try {
      await apiClient.delete(`produtos/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting client:", error);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, addProduct, editProduct, deleteProduct };
};

export default useProductManagement;
