import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {addACart, getAllProducts, getProductsOfCategory} from "../api/Api";
import {IProduct} from "../interfaces/api-interfaces";
import {Badge, Button, Card, Image, List, message, Rate, Select, Spin, Typography} from "antd";
import './Products.scss';
import LoadingIcon from "antd/es/button/LoadingIcon";
import {LoadingOutlined} from "@ant-design/icons";
import Loader from "../loader/Loader";
import AddToCartButton from "./AddToCartButton";
import {useParams} from "react-router-dom";

const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [productsLoading, setProductsLoading] = useState(false);
    const [sortOrder, setSortOrder] = useState('az');
    const param = useParams();

    useEffect(() => {
        setProductsLoading(true);
        (!param?.categoryId ? getAllProducts() : getProductsOfCategory(param.categoryId as string))
            .then(res => setProducts(res.products))
            .then(() => setProductsLoading(false));
    }, [param]);

    const getSortedProducts = () => {
        const sortedProducts = [...products];
        if (sortOrder === 'az') {
            sortedProducts.sort((a, b) => {
                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 :
                    a.title.toLowerCase() === b.title.toLowerCase() ? 0 : -1;
            })
        } else if (sortOrder === 'za') {
            sortedProducts.sort((a, b) => {
                return a.title.toLowerCase() < b.title.toLowerCase() ? 1 :
                    a.title.toLowerCase() === b.title.toLowerCase() ? 0 : -1;
            })
        } else if (sortOrder === 'lowHigh') {
            sortedProducts.sort((a, b) => {
                return a.price - b.price;
            })
        } else if (sortOrder === 'highLow') {
            sortedProducts.sort((a, b) => {
                return b.price - a.price;
            })
        }
        return sortedProducts;
    }

    if (productsLoading) {
        return <Loader/>
    }

    return (
        <div>
            <div style={{marginLeft: '15px'}}>
                <Typography.Text>Sort by: </Typography.Text>
                <Select defaultValue={'az'}
                        onChange={(value) => {
                            setSortOrder(value);
                        }}
                        options={[
                            {
                                label: 'Alphabetically a-z',
                                value: 'az',
                            },
                            {
                                label: 'Alphabetically z-a',
                                value: 'za',
                            },
                            {
                                label: 'By price low to high',
                                value: 'lowHigh',
                            },
                            {
                                label: 'By price high to low',
                                value: 'highLow',
                            },
                        ]}/>
            </div>
            <List dataSource={getSortedProducts()}
                  grid={{column: 3}}
                  renderItem={(product, index) => {
                      return (
                          <Badge.Ribbon className={'productsCard__badge'}
                                        color={"red"}
                                        text={`-${product.discountPercentage}%`}
                                        key={product.id}>
                              <Card title={product.title}
                                    className={'productsCard'}
                                    actions={[
                                        <Rate disabled allowHalf value={product.rating}/>,
                                        <AddToCartButton item={product}/>
                                    ]}
                                    cover={<Image className={'productsCard__image'} src={product.thumbnail}/>}
                              >
                                  <Card.Meta title={
                                      <Typography.Paragraph>
                                          {`Price: $${product.price} `}
                                          <Typography.Text delete type={"danger"}>
                                              {`$${((product.price * product.discountPercentage / 100) + product.price).toFixed(2)}`}
                                          </Typography.Text>
                                      </Typography.Paragraph>
                                  }
                                             description={
                                                 <Typography.Paragraph
                                                     ellipsis={{rows: 2, expandable: true, symbol: 'more'}}>
                                                     {product.description}
                                                 </Typography.Paragraph>
                                             }
                                  />
                              </Card>
                          </Badge.Ribbon>
                      )
                  }}
            />
        </div>
    );
};

export default Products;