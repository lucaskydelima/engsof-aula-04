const brandService = {
    getAll: async () => {
      const response = await fetch("http://localhost:4000/brands");
      const data = await response.json();
      return data;
    },
  };
  
  export default brandService;