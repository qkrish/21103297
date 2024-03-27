const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Store the access token
let access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNTM1MzQzLCJpYXQiOjE3MTE1MzUwNDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFkYjI4ZWNmLTQwYzUtNGIyOS04Zjg0LTc3ZmNhMGFjZjdmMSIsInN1YiI6ImtyaXM0NTZAYWJjLmVkdSJ9LCJjb21wYW55TmFtZSI6ImxramhnZmRzYSIsImNsaWVudElEIjoiYWRiMjhlY2YtNDBjNS00YjI5LThmODQtNzdmY2EwYWNmN2YxIiwiY2xpZW50U2VjcmV0IjoicGJCZXBBQnBJTmFpdnhPQiIsIm93bmVyTmFtZSI6ImtyaXM0NTYiLCJvd25lckVtYWlsIjoia3JpczQ1NkBhYmMuZWR1Iiwicm9sbE5vIjoiMjIifQ.HVmTmTzuA-j8vZ9paTjAEJE4bHYuwSaqGLgBJ2oQ7JM'; // replace with your actual access token

// Create the API endpoint
app.get('/companies/:companyname/categories/:categoryname/products', async (req, res) => {
  const { companyname, categoryname } = req.params;
  const { top, minPrice, maxPrice } = req.query;

  // Call the test server API
  const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
    headers: { Authorization: `Bearer ${access_token}` }
  });

  // Send the response to the client
  res.json(response.data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
