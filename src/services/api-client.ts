import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b546b0f77a349c182ae5265133e40d6",
  },
});
