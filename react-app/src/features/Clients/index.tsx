import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ClientForm from "./components/Form";
import ClientTable from "./components/Table";
import useClientManagement from "./hook/useClientManagement";
import styles from "./styles.module.css";
import { ICllients } from "./types";

const ClientList = () => {
  const { clients, loading, addClient, editClient, deleteClient } =
    useClientManagement();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ICllients>(
    {} as ICllients
  );
  const [newClient, setNewClient] = useState<any>({ nome: "", email: "" });
  const [filter, setFilter] = useState({ nome: "", email: "" });

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setNewClient({ nome: "", email: "" });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    if (editMode) {
      await editClient(selectedClient.id, newClient);
    } else {
      await addClient(newClient);
    }
    handleClose();
  };

  const handleEdit = (client: ICllients) => {
    setSelectedClient(client);
    setNewClient({ nome: client.nome, email: client.email });
    setEditMode(true);
    setOpen(true);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredClients = clients.filter(
    (client: ICllients) =>
      client.nome.toLowerCase().includes(filter.nome.toLowerCase()) &&
      client.email.toLowerCase().includes(filter.email.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        marginBottom={2}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <TextField
            label="Filtrar por Nome"
            name="nome"
            value={filter.nome}
            onChange={handleFilterChange}
          />
          <TextField
            label="Filtrar por Email"
            name="email"
            value={filter.email}
            onChange={handleFilterChange}
          />
        </Box>
        <Box>
          <Button onClick={handleOpen} variant="contained" color="primary">
            Adicionar Cliente
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={styles.table_head}>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                <TableCell>Ações</TableCell>
              </Box>
            </TableRow>
          </TableHead>
          <TableBody>
            <ClientTable
              clients={filteredClients}
              handleEdit={handleEdit}
              handleDelete={deleteClient}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <ClientForm
        open={open}
        handleClose={handleClose}
        editMode={editMode}
        loading={loading}
        newClient={newClient}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewClient({ ...newClient, [e.target.name]: e.target.value })
        }
        handleSave={handleSave}
      />
    </div>
  );
};

export default ClientList;
