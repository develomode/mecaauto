import api from "./api";

import { IBrand } from "../shared/interfaces";

type GetBrandsResponse = {
  data: IBrand[];
};

export async function getBrands() {
  let rep = {};
  await api.get("brands").then((response) => {
    rep = response.data;
  });
  return rep;
}

export async function createBrand(json: IBrand) {
  api.post("brands", json).then((response) => {});
}

export async function deleteBrand(id: number) {
  api.delete(`brands/${id}`).then((response) => {
    console.log(response);
  });
}
