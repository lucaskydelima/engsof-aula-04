const vehicleService = {
  getAll: async () => {
    const response = await fetch("http://localhost:4000/vehicles");
    const data = await response.json();
    return data;
  },

  delete: async (vehicle) => {
    const response = await fetch("http://localhost:4000/vehicles", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicle),
    });

    const data = await response.json();
    return data;
  },

  post: async (vehicle) => {
    const response = await fetch("http://localhost:4000/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicle),
    });

    const data = await response.json();
    return data;
  },

  put: async (vehicle) => {
    const response = await fetch("http://localhost:4000/vehicles", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicle),
    });

    const data = await response.json();
    return data;
  },
};

export default vehicleService;
