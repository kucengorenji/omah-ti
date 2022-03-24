module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'bottom-image': "url('/src/assets/image.png')",
        jumbotron: "url('/src/assets/jumbotron.png')",
      }),
    },
  },
  plugins: [],
};
