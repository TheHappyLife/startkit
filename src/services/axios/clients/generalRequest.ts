import axios from "axios";

const generalRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export default generalRequest;
