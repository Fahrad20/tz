'use client'
import { useSelector, useDispatch } from "react-redux";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import { IPricePlan } from "@/constants/types";
import { RootState } from "@/store/store";
import { updateSinglePricePlan } from "@/store/slices/dataSlice";
import { useState } from "react";

export const PricePlansMain = () => {
  const pricePlans = useSelector((state: RootState) => state.data.pricePlans);
  const dispatch = useDispatch();
  const [editingPricePlan, setEditingPricePlan] = useState<IPricePlan | null>(
    null
  );

  const handleSave = (updatedPricePlan: IPricePlan) => {
    dispatch(updateSinglePricePlan(updatedPricePlan));
    setEditingPricePlan(null);
  };

  return (
    <>
      <Table
        data={pricePlans}
        headers={Object.keys(pricePlans[0]) as (keyof IPricePlan)[]}
        onEdit={setEditingPricePlan}
      />
      {editingPricePlan && (
        <Modal
          item={editingPricePlan}
          fields={["description"]}
          onSave={handleSave}
          onClose={() => setEditingPricePlan(null)}
        />
      )}
    </>
  );
};
