// Enhanced color palette with better contrast and visual harmony
export const kamiounColors = {
  // Core brand colors
  primary: "#0066CC", // More refined blue (better for accessibility)
  primaryLight: "#4D9BF7", // Lighter variant
  primaryDark: "#004A99", // Darker variant

  secondary: "#FFC72C", // Vibrant but not harsh yellow
  secondaryLight: "#FFE16B",
  secondaryDark: "#E6B400",

  // Extended palette
  tertiary: "#00B4D8", // Cyan-blue (replaces tertiaryBlue)
  accent: "#FF6B35", // Complementary orange for CTAs

  // Neutrals
  white: "#FFFFFF",
  lightGray: "#F5F7FA", // Softer background
  mediumGray: "#E1E5EB",
  gray: "#A3A9B5",
  darkGray: "#626E7A",
  black: "#222222", // Softer than pure black

  // Functional colors
  success: "#4CAF50",
  warning: "#FFB74D",
  error: "#F44336",
  info: "#2196F3",

  // Backgrounds
  background: "#F8FAFD", // Very light blue-gray
  bg_grey: "#F0F2F5", // Slightly darker background
  cardBg: "#FFFFFF",

  // Text
  textPrimary: "#2D3748", // High contrast
  textSecondary: "#4A5568",
  textDisabled: "#A0AEC0",
};

// Organized design tokens for systematic theming
export const tokensDark = {
  grey: {
    0: kamiounColors.white,
    10: kamiounColors.lightGray,
    50: kamiounColors.background,
    100: kamiounColors.mediumGray,
    200: "#D1D5DB",
    300: kamiounColors.gray,
    400: "#8E9AAB",
    500: "#6B7280",
    600: kamiounColors.darkGray,
    700: "#4B5563",
    800: "#374151",
    900: "#1F2937",
    1000: kamiounColors.black,
  },
  primary: {
    100: kamiounColors.primaryLight,
    200: "#7FB2F0",
    300: "#66A4ED",
    400: kamiounColors.primary,
    500: "#005BB7",
    600: "#004E9E",
    700: "#004085",
    800: "#00336C",
    900: "#002653",
  },
  secondary: {
    50: "#FFF9E6",
    100: kamiounColors.secondaryLight,
    200: "#FFD95C",
    300: kamiounColors.secondary,
    400: "#FFBF00",
    500: "#E6B400",
    600: "#CC9F00",
    700: "#B38A00",
    800: "#997500",
    900: "#806000",
  },
  tertiary: {
    100: "#80DFF2",
    200: "#66D7EF",
    300: "#4DCEEB",
    400: kamiounColors.tertiary,
    500: "#00A2C2",
    600: "#008FAC",
    700: "#007D96",
    800: "#006A80",
    900: "#00586A",
  },
};

// Light theme is now more intentionally designed rather than just reversed
export const tokensLight = {
  grey: {
    0: kamiounColors.black,
    10: "#1F2937",
    50: "#374151",
    100: "#4B5563",
    200: "#6B7280",
    300: kamiounColors.gray,
    400: "#8E9AAB",
    500: "#D1D5DB",
    600: kamiounColors.mediumGray,
    700: kamiounColors.lightGray,
    800: kamiounColors.background,
    900: kamiounColors.bg_grey,
    1000: kamiounColors.white,
  },
  primary: {
    100: "#002653",
    200: "#00336C",
    300: "#004085",
    400: "#004E9E",
    500: "#005BB7",
    600: kamiounColors.primary,
    700: "#66A4ED",
    800: "#7FB2F0",
    900: kamiounColors.primaryLight,
  },
  secondary: {
    50: "#806000",
    100: "#997500",
    200: "#B38A00",
    300: "#CC9F00",
    400: "#E6B400",
    500: kamiounColors.secondary,
    600: "#FFBF00",
    700: "#FFD95C",
    800: kamiounColors.secondaryLight,
    900: "#FFF9E6",
  },
};

// Enhanced theme settings with better typography and spacing
export const themeSettings = (mode) => {
  const colors = mode === "dark" ? tokensDark : tokensLight;

  return {
    palette: {
      mode: mode,
      primary: {
        ...colors.primary,
        main: colors.primary[400],
        light: colors.primary[300],
        dark: colors.primary[600],
      },
      secondary: {
        ...colors.secondary,
        main: colors.secondary[300],
        light: colors.secondary[200],
        dark: colors.secondary[500],
      },
      tertiary: {
        ...colors.tertiary,
        main: colors.tertiary?.[400] || kamiounColors.tertiary,
      },
      neutral: {
        ...colors.grey,
        main: colors.grey[500],
      },
      background: {
        default: mode === "dark" ? colors.grey[900] : colors.grey[800],
        paper: mode === "dark" ? colors.grey[800] : colors.grey[700],
        alt: mode === "dark" ? colors.grey[800] : colors.grey[50],
      },
      text: {
        primary: mode === "dark" ? colors.grey[100] : colors.grey[900],
        secondary: mode === "dark" ? colors.grey[300] : colors.grey[700],
        disabled: mode === "dark" ? colors.grey[500] : colors.grey[400],
      },
      error: {
        main: kamiounColors.error,
      },
      warning: {
        main: kamiounColors.warning,
      },
      success: {
        main: kamiounColors.success,
      },
      info: {
        main: kamiounColors.info,
      },
    },
    typography: {
      fontFamily: ['"Inter"', "sans-serif"].join(","),
      htmlFontSize: 16,
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      button: {
        fontWeight: 600,
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
  };
};
