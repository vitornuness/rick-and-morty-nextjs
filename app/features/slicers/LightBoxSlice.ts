import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

type LightBoxState = {
  image: StaticImageData | null;
};

const initialState: LightBoxState = {
  image: null,
};

const lightBoxSlice = createSlice({
  name: "lightbox",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<StaticImageData>) => {
      state.image = action.payload;
    },
    close: (state) => {
      state.image = null;
    },
  },
});

export const { open, close } = lightBoxSlice.actions;
export default lightBoxSlice.reducer;
