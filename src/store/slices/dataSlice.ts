import { IDataState, IPage, IPricePlan, IProduct } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "@/utils/data";
import { getFlattenProducts } from "@/utils/getFlattenProducts";

const filteredProducts = data.products.map((d) => getFlattenProducts(d));
const initialState: IDataState = {
  ...data,
  products: filteredProducts,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateSingleProduct: (state, action: PayloadAction<IProduct>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index >= 0) state.products[index] = action.payload;
    },
    updateSinglePricePlan: (state, action: PayloadAction<IPricePlan>) => {
      const index = state.pricePlans.findIndex(
        (p) => p.id === action.payload.id
      );
      if (index >= 0) state.pricePlans[index] = action.payload;
    },
    updateSinglePage: (state, action: PayloadAction<IPage>) => {
      const index = state.pages.findIndex((p) => p.id === action.payload.id);
      if (index >= 0) state.pages[index] = action.payload;
    },
  },
});

export const { updateSingleProduct, updateSinglePricePlan, updateSinglePage } =
  dataSlice.actions;
export default dataSlice.reducer;
