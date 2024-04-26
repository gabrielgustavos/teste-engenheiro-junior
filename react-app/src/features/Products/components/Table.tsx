import { Box, Button, TableCell, TableRow } from "@mui/material";
import { IProduct, ProductTableProps } from "./types";

const ProductTable = ({
  products,
  handleEdit,
  handleDelete,
}: ProductTableProps) => {
  return products.map((product: IProduct) => (
    <TableRow key={product.id}>
      <TableCell>{product.nome}</TableCell>
      <TableCell>R$ {product.preco}</TableCell>
      <TableCell>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Button variant="outlined" onClick={() => handleEdit(product)}>
            Editar
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDelete(product.id)}
          >
            Excluir
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  ));
};

export default ProductTable;
