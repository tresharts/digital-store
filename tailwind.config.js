/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- CORES DA MARCA ---
        primary: {
            DEFAULT: '#C92071', // Rosa principal (Botões, Logo)
            foreground: '#FFFFFF', // Texto sobre a cor primária
        },
        "primary-dark": "#991956", // Hover do botão
        "primary-light": "#EDABCA", // Detalhes ou fundos leves

        secondary: {
            DEFAULT: '#B5B6F2', // Azul/Roxo secundário
            foreground: '#FFFFFF',
        },
        "secondary-light": "#EFEFFF", 

        // --- TONS DE CINZA E FUNDOS ---
        "dark-gray": "#1F1F1F", // Fundo do Footer
        "dark-gray-2": "#474747", // Textos secundários escuros
        "dark-gray-3": "#666666", // Textos de apoio
        "light-gray": "#F5F5F5", // Fundo da página (seções claras)
        "light-gray-2": "#CCCCCC", // Bordas sutis
        "light-gray-3": "#8F8F8F", // Ícones inativos ou placeholders
        "white": "#FFFFFF",

        // --- FEEDBACK (Erros e Sucessos) ---
        destructive: {
            DEFAULT: '#EE4266',
            foreground: '#FFFFFF',
        },
        success: "#52CA76",
        warning: "#F6AA1C",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}