import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import brandService from "./brandService";

// get all brands
export const getAllBrands = createAsyncThunk("brand/get-brands", async () => {
  try {
    return await brandService.getAllBrands();
  } catch (error) {
    console.log(error);
  }
});

// get single brand
export const getBrand = createAsyncThunk("brand/get-brand", async (id) => {
  try {
    return await brandService.getBrand(id);
  } catch (error) {
    console.log(error);
  }
});
// create brand
export const createBrand = createAsyncThunk(
  "brand/create-brand",
  async (brandData) => {
    try {
      return await brandService.createBrand(brandData);
    } catch (error) {
      console.log(error);
    }
  }
);
// update brand
export const updateBrand = createAsyncThunk(
  "brand/update-brand",
  async (brandData) => {
    try {
      return await brandService.updateBrand(brandData);
    } catch (error) {
      console.log(error);
    }
  }
);
// delete brand
export const deleteBrand = createAsyncThunk(
  "brand/delete-brand",
  async (id) => {
    try {
      return await brandService.deleteBrand(id);
    } catch (error) {
      console.log(error);
    }
  }
);

// reset all initialState
export const resetState = createAction("Reset_All");

const initialState = {
  brands: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default brandSlice.reducer;
