import React from "react";
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import useStyles from "./CartItemStyles";

export default function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
    
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name}className={classes.media}/>{/*This shows the image of the products in the basket */}
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>{/*This prints the name of the products */}
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>{/*this prints the price of items in the basket with the euro symbol */}
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>{/*This button decreases the quantity*/}
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>{/*This button increases the quantity*/}
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>{/*This button removes items from the basket*/}
            </CardActions>
        </Card>
    );
}

