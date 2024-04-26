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
import ProductForm from "./components/Form";
import ProductTable from "./components/Table";
import useProductManagement from "./hook/useProductManagement";
import styles from "./styles.module.css";
import { IProducts } from "./types";

const ProductList = () => {
  const { products, loading, addProduct, editProduct, deleteProduct } =
    useProductManagement();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProducts>(
    {} as IProducts
  );
  const [newProduct, setNewProduct] = useState<any>({ nome: "", preco: "" });
  const [filter, setFilter] = useState({ nome: "", preco: "" });

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setNewProduct({ nome: "", preco: "" });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    if (editMode) {
      await editProduct(selectedProduct.id, newProduct);
    } else {
      await addProduct(newProduct);
    }
    handleClose();
  };

  const handleEdit = (product: IProducts) => {
    setSelectedProduct(product);
    setNewProduct({ nome: product.nome, preco: product.preco });
    setEditMode(true);
    setOpen(true);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter(
    (product: IProducts) =>
      product.nome.toLowerCase().includes(filter.nome.toLowerCase()) &&
      product.preco.toLowerCase().includes(filter.preco.toLowerCase())
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
            label="Filtrar por nome"
            name="nome"
            value={filter.nome}
            onChange={handleFilterChange}
          />
          <TextField
            label="Filtrar por preço"
            name="preco"
            value={filter.preco}
            onChange={handleFilterChange}
          />
        </Box>
        <Box>
          <Button onClick={handleOpen} variant="contained" color="primary">
            Adicionar Produto
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={styles.table_head}>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
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
            <ProductTable
              products={filteredProducts}
              handleEdit={handleEdit}
              handleDelete={deleteProduct}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <ProductForm
        open={open}
        handleClose={handleClose}
        editMode={editMode}
        loading={loading}
        newProduct={newProduct}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
        }
        handleSave={handleSave}
      />
    </div>
  );
};

export default ProductList;
