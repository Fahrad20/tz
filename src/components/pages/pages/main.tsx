"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import { IPage } from "@/constants/types";
import { RootState } from "@/store/store";
import { updateSinglePage } from "@/store/slices/dataSlice";

export const PagesMain = () => {
  const pages = useSelector((state: RootState) => state.data.pages);
  const dispatch = useDispatch();
  const [editingPage, setEditingPage] = useState<IPage | null>(null);

  const handleSave = (updatedPage: IPage) => {
    dispatch(updateSinglePage(updatedPage));
    setEditingPage(null);
  };
  return (
    <>
      <Table
        data={pages}
        headers={Object.keys(pages[0]) as (keyof IPage)[]}
        onEdit={setEditingPage}
      />
      {editingPage && (
        <Modal
          item={editingPage}
          fields={["title"]}
          onSave={handleSave}
          onClose={() => setEditingPage(null)}
        />
      )}
    </>
  );
};
