import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './ItemStyles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia component="image" className={classes.media} title={product.name} image={product.image.url} />{/*This Card Media allows the website to get the image and name of the product and display  */}
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>{/*Using a typography to list the products name */}
          <Typography gutterBottom variant="h5" component="h2">{product.price.formatted_with_symbol}</Typography>{/*Using a typography to show the price of the product in euros */}
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />{/*Using a typography to give the description of the products*/}
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Basket" onClick={handleAddToCart}>
          <AddShoppingCart/>
        </IconButton>
      </CardActions>{/*This card action contains a button that handles adding an item to the basket for checkout*/}

    </Card>
  );
};

export default Product;

