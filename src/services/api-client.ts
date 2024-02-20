import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "226764bb9b0642dc94023d03aa5381ae",
  },
});
