import axios from "axios";

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = "http://localhost:8080/record";

export const getRecords = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addRecords = async (user) => {
  return await axios.post(`${usersUrl}/add`, user);
};

export const deleteRecord = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editRecords = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};

export const getRecordById = async (id, user) => {
  return await axios.get(`${usersUrl}/${id}`, user);
};
