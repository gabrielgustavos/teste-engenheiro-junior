export interface IProductFormProps {
  open: boolean;
  handleClose: () => void;
  editMode: boolean;
  loading: boolean;
  newProduct: IProduct;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

interface IProduct {
  id: number;
  nome: string;
  preco: string;
}

export interface ProductTableProps {
  products: Product[];
  handleEdit: (product: Product) => void;
  handleDelete: (productId: number) => void;
}
