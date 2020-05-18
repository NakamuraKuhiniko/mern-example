import axios from "axios";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const createCategory = (label, parent) =>
  axios.post("api/categories", { label, parent });

export const getCategories = () =>
  axios.get("api/categories").then(({ data }) => data);

export const deleteCategories = (id) => axios.delete(`api/categories/${id}`);

export const updateCategory = (id, category) =>
  axios.put(`api/categories/${id}`, { category });
