import { useEffect, useState } from "react";

import apiClient from "../../../axios-config";
import { ICllients } from "../types";

const useClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await apiClient.get("clientes");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const addClient = async (newClient: ICllients) => {
    setLoading(true);
    try {
      await apiClient.post("clientes", newClient);
      fetchClients();
    } catch (error) {
      console.error("Error adding client:", error);
    } finally {
      setLoading(false);
    }
  };

  const editClient = async (clientId: number, updatedClient: ICllients) => {
    setLoading(true);
    try {
      await apiClient.put(`clientes/${clientId}`, updatedClient);
      fetchClients();
    } catch (error) {
      console.error("Error editing client:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteClient = async (clientId: number) => {
    setLoading(true);
    try {
      await apiClient.delete(`clientes/${clientId}`);
      fetchClients();
    } catch (error) {
      console.error("Error deleting client:", error);
    } finally {
      setLoading(false);
    }
  };

  return { clients, loading, addClient, editClient, deleteClient };
};

export default useClientManagement;
