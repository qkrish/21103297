import React from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core';

// Product component
const Product = ({ product }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="subtitle1">Company: {product.company}</Typography>
      <Typography variant="subtitle1">Category: {product.category}</Typography>
      <Typography variant="subtitle1">Price: {product.price}</Typography>
      <Typography variant="subtitle1">Rating: {product.rating}</Typography>
      <Typography variant="subtitle1">Discount: {product.discount}</Typography>
      <Typography variant="subtitle1">Availability: {product.availability}</Typography>
    </CardContent>
  </Card>
);

// Products page
const ProductsPage = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Replace with your actual server URL and endpoint
    axios.get('http://localhost:3000/categories/laptops/products?n=10')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Product details page
const ProductPage = ({ match }) => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    // Replace with your actual server URL and endpoint
    axios.get(`http://localhost:3000/categories/laptops/products/${match.params.id}`)
      .then(response => setProduct(response.data));
  }, [match.params.id]);

  return product ? <Product product={product} /> : <div>Loading...</div>;
};

// App component
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/products/:id" component={ProductPage} />
      <Route path="/" component={ProductsPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
