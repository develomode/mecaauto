import { api } from "../ServiceHelper";

export const fetchProductData = (id) => {
  await api.get("/products/" + id).then((response) => {
    console.log(response.data);
  });
};
