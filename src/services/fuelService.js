const fuelService = {
  getAll: async () => {
    const response = await fetch("http://localhost:4000/fuels");
    const data = await response.json();
    return data;
  },
};

export default fuelService;
