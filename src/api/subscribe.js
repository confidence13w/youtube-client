import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const create = async (data) => {
  return await instance.post("create", data);
};

export const remove = async (date) => {
  return await instance.delete("remove", data);
};

export const count = async (data) => {
  return await instance.get("count", data);
};
