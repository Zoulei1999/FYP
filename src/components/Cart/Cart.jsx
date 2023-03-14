import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './CartStyles';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">Your Shopping basket is empty!
      <br/>
      <Link className={classes.link} to="/">Add items to basket to checkout</Link>!
    </Typography>
  );//This is used when basket is empty, to send user to home page

  if (!cart.line_items) return 'Loading . . . ';

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>{/*This adjust the grid sizes for various sizes*/}
            <CartItem item={lineItem} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />{/*This handles changes to the cart such as adding or removing items in the basket */}
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Basket</Button>{/*Button that empties the basket of all items */}
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>{/*This button will send the user to the checkout page*/}
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Basket</Typography>
      { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
    </Container>
  );
};

export default Cart;

