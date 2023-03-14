import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const OrderDetails = ({ checkoutToken }) => (//Start OrderDetails
  <>
    <Typography variant="h6" gutterBottom>Order Details</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />{/*Use the product details from the basket and displays them */}
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}{/*This gets the items in the basket and displays the quantity and price*/}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>{/*This shows the total price of the order*/}
      </ListItem>
    </List>
  </>
);//End OrderDetails

export default OrderDetails;

