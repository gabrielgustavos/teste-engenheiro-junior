import { Box, Button, TableCell, TableRow } from "@mui/material";
import { ICllients } from "../types";
import { ClientTableProps } from "./types";

const ClientTable = ({
  clients,
  handleEdit,
  handleDelete,
}: ClientTableProps) => {
  return clients.map((client: ICllients) => (
    <TableRow key={client.id}>
      <TableCell>{client.nome}</TableCell>
      <TableCell>{client.email}</TableCell>
      <TableCell>
        <Box display="flex" alignItems="center" gap={2}>
          <Button variant="outlined" onClick={() => handleEdit(client)}>
            Editar
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDelete(client.id)}
          >
            Excluir
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  ));
};

export default ClientTable;
