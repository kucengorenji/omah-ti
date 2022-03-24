module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'bottom-image': "url('/src/assets/image.png')",
        'decor-jumbotron': "url('/src/assets/jumbotron.png')",
        'data-1': "url('/src/assets/data1.png')",
        'data-2': "url('/src/assets/data2.png')",
        'data-3': "url('/src/assets/data3.png')",
        'data-4': "url('/src/assets/data4.png')",
      }),
    },
  },
  plugins: [],
};
