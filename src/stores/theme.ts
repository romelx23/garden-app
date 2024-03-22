import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

type ThemeState = "light" | "dark";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<ThemeState>("light");

  const toggleTheme = () => {
    console.log("toggleTheme", theme.value);

    theme.value = theme.value === "light" ? "dark" : "light";

    console.log("llego");

    localStorage.setItem("theme", theme.value);
  };

  onMounted(() => {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme) {
      theme.value = localStorageTheme as ThemeState;
      console.log("theme.value", theme.value);
      return;
    }

    localStorage.setItem("theme", theme.value);
  });

  return {
    theme,
    toggleTheme,
  };
});

// export const useThemeStore = defineStore("theme", {
//   state: () => ({
//     theme: "light" as ThemeState,
//   }),

//   actions: {
//     toggleTheme() {
//       console.log("toggleTheme", this.theme);

//       this.theme = this.theme === "light" ? "dark" : "light";

//       console.log("llego");

//       localStorage.setItem("theme", this.theme);
//     },
//   },
// });
