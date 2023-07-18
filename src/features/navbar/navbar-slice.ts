import { createSlice } from "@reduxjs/toolkit";

interface INavbarState {
  navbarMenuIsVisible: boolean;
}

const initialState: INavbarState = {
  navbarMenuIsVisible: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    navbarMenuOpened(state) {
      state.navbarMenuIsVisible = true;
    },
    navbarMenuClosed(state) {
      state.navbarMenuIsVisible = false;
    },
  },
});

export const { navbarMenuOpened, navbarMenuClosed } = navbarSlice.actions;
export default navbarSlice.reducer;
