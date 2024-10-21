"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import { IProduct } from "@/constants/types";
import { RootState } from "@/store/store";
import { updateSingleProduct } from "@/store/slices/dataSlice";

export const ProductsMain = () => {
  const products = useSelector((state: RootState) => state.data.products);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);

  const handleSave = (updatedProduct: IProduct) => {
    dispatch(updateSingleProduct(updatedProduct));
    setEditingProduct(null);
  };

  return (
    <>
      {" "}
      <Table
        data={products}
        headers={Object.keys(products[0]) as (keyof IProduct)[]}
        onEdit={setEditingProduct}
      />
      {editingProduct && (
        <Modal
          item={editingProduct}
          fields={["name"]}
          onSave={handleSave}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </>
  );
};
