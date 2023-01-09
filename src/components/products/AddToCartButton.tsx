import React, {useState} from 'react';
import {IProduct} from "../interfaces/api-interfaces";
import {addACart} from "../api/Api";
import {Button, message} from "antd";

const AddToCartButton = ({item}: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const addProductToCart = (item: IProduct) => {
        setIsLoading(true);
        addACart(item.id).then((res) => {
                console.log(res)
                message.success(`Item ${item.title} has been added to the cart!`)
                    .then(() => setIsLoading(false))
            }
        )
    }
    return <Button loading={isLoading}
                   onClick={() => addProductToCart(item)}
                   type={'link'}>Add to card</Button>
};

export default AddToCartButton;