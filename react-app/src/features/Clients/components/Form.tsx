import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  TextField,
} from "@mui/material";
import { IClientFormProps } from "./types";

const ClientForm = ({
  open,
  handleClose,
  editMode,
  loading,
  newClient,
  handleChange,
  handleSave,
}: IClientFormProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {editMode ? "Editar Cliente" : "Adicionar Cliente"}
      </DialogTitle>
      <DialogContent>
        <Box marginTop={4} display="flex" gap={2}>
          <TextField
            label="Nome"
            name="nome"
            value={newClient.nome}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={newClient.email}
            onChange={handleChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary" disabled={loading}>
          {loading ? <LinearProgress /> : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClientForm;
