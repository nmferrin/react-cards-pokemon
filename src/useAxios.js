// src/useAxios.js
import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

export function useAxios(baseURL) {
  const [data, setData] = useState([]);

  // Updated to accept an endpoint
  const addData = async (endpoint = '') => {
    const url = `${baseURL}${endpoint}`;
    const response = await axios.get(url);
    setData(data => [...data, { ...response.data, id: uuid() }]);
  };

  return [data, addData];
}
