
import React from "react"
import { Container, Grid, Box } from '@mui/material';
import Navbar from "./components/NavBar";
import ProductoGall from "./components/ProductGall";
import ProductoDet from "./components/ProductDet";

function App() {


  return (
    <>
      <Navbar />
      <Box

        display="flex"
        justifyContent="space-around"
        alignItems="center"
        minHeight="100vh"
        sx={{ backgroundColor: 'white' }} >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} >
              <ProductoGall />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductoDet/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};


export default App
