import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("current_theme") || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("current_theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
