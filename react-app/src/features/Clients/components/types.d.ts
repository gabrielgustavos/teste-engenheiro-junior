export interface IClientFormProps {
  open: boolean;
  handleClose: () => void;
  editMode: boolean;
  loading: boolean;
  newClient: ICllients;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

interface Client {
  id: number;
  nome: string;
  email: string;
}

export interface ClientTableProps {
  clients: Client[];
  handleEdit: (client: Client) => void;
  handleDelete: (clientId: number) => void;
}
