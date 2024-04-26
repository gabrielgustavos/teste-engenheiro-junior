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
import { IProductFormProps } from "./types";

const ProductForm = ({
  open,
  handleClose,
  editMode,
  loading,
  newProduct,
  handleChange,
  handleSave,
}: IProductFormProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {editMode ? "Editar Produto" : "Adicionar Produto"}
      </DialogTitle>
      <DialogContent>
        <Box marginTop={4} display="flex" gap={2}>
          <TextField
            label="Nome"
            name="nome"
            value={newProduct.nome}
            onChange={handleChange}
          />
          <TextField
            label="Preço"
            name="preco"
            value={newProduct.preco}
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

export default ProductForm;
