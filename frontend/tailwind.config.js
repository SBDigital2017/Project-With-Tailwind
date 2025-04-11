/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
              "shimmer-slide":
                "shimmer-slide var(--speed) ease-in-out infinite alternate",
              "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
            },
            keyframes: {
              "spin-around": {
                "0%": {
                  transform: "translateZ(0) rotate(0)",
                },
                "15%, 35%": {
                  transform: "translateZ(0) rotate(90deg)",
                },
                "65%, 85%": {
                  transform: "translateZ(0) rotate(270deg)",
                },
                "100%": {
                  transform: "translateZ(0) rotate(360deg)",
                },
              },
              "shimmer-slide": {
                to: {
                  transform: "translate(calc(100cqw - 100%), 0)",
                },
              },
            },
          },
    },
    plugins: [],
  };
  
  const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      // your paths
      "./src/**/*.{ts,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        animation: {
          aurora: "aurora 60s linear infinite",
        },
        keyframes: {
          aurora: {
            from: {
              backgroundPosition: "50% 50%, 50% 50%",
            },
            to: {
              backgroundPosition: "350% 50%, 350% 50%",
            },
          },
        },
      },
    },
    plugins: [addVariablesForColors],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({ addBase, theme }) {
    addBase({
      ':root': {
        '--color-primary': theme('colors.blue.500'),
        '--color-secondary': theme('colors.green.500'),
      },
    });
  }
  
  module.exports = {
    plugins: [require('tailwindcss/plugin')(addVariablesForColors)],
  };