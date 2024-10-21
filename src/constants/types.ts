export interface IPage {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}

export interface IPricePlan {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt?: string;
}

export interface IProduct {
  id: number;
  name: string;
  size: string;
  amount: number;
  active: boolean;
  createdAt: string;
}

export interface IModalProps<T> {
  item: T;
  fields: (keyof T)[];
  onSave: (updatedItem: T) => void;
  onClose: () => void;
}

export interface ITableProps<T> {
  data: T[];
  headers: (keyof T)[];
  onEdit: (item: T) => void;
}

export interface IDataState {
  products: IProduct[];
  pricePlans: IPricePlan[];
  pages: IPage[];
}
