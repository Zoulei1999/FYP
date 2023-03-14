import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Items";
import useStyles from "./ProductStyles";

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>{/*This grid allows adaptation to different screen sizes and orientation*/}
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} large={3}>{/* The xs,sm,md and large represent the different amount of columsn for different size screens */}
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;

