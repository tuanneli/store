import React, {useEffect, useState} from 'react';
import {Badge, Button, Checkbox, Drawer, Form, Input, InputNumber, message, Table, Typography} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {IAddACartResponseProduct} from "../interfaces/api-interfaces";
import {getACart} from "../api/Api";
import Paragraph from "antd/es/skeleton/Paragraph";
import {Value} from "sass";
import {FilterConfirmProps} from "antd/es/table/interface";

const AppCart = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState<IAddACartResponseProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isConfirmDrawerOpen, setIsConfirmDrawerOpen] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getACart()
            .then(res => {
                setCartProducts(res.products);
                setIsLoading(false);
            });
        console.log(cartProducts);
    }, []);

    const onConfirmOrder = (values: FilterConfirmProps) => {
        setIsConfirmDrawerOpen(false);
        setIsDrawerOpen(false);
        message.success("Your order has been placed successfully");
    }

    return (
        <>
            <div onClick={() => setIsDrawerOpen(true)}>
                <Badge count={cartProducts.length} className={'appHeader__shopping-cart'}>
                    <ShoppingCartOutlined/>
                </Badge>
            </div>
            <Drawer width={500} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Table
                    rowKey={(record) => record.id}
                    pagination={false}
                    dataSource={cartProducts}
                    summary={(data) => {
                        const total = data.reduce((prev, curr) => {
                            return prev += curr.total
                        }, 0)
                        return <Typography.Title level={5}>Total: ${total}</Typography.Title>
                    }}
                    columns={[
                        {
                            key: '1',
                            title: 'Title',
                            dataIndex: 'title',
                        },
                        {
                            key: '2',
                            title: 'Price',
                            dataIndex: 'price',
                            render: (value) => {
                                return <div>${value}</div>
                            }
                        },
                        {
                            key: '3',
                            title: 'Quantity',
                            dataIndex: 'quantity',
                            render: (value, record) => {
                                return <InputNumber min={1}
                                                    onChange={(value) => {
                                                        setCartProducts((prev) => {
                                                            return prev.map(product => {
                                                                if (product.id === record.id) {
                                                                    product.total = product.price * value;
                                                                }
                                                                return product;
                                                            })
                                                        })
                                                    }}
                                                    defaultValue={value}/>
                            }
                        },
                        {
                            key: '4',
                            title: 'Total',
                            dataIndex: 'total',
                            render: (value) => {
                                return <div>${value}</div>
                            }
                        },
                    ]}/>
                <Button onClick={() => setIsConfirmDrawerOpen(true)} type={"primary"}>Confirm Order</Button>
            </Drawer>
            <Drawer title={"Confirm order"} onClose={() => setIsConfirmDrawerOpen(false)} open={isConfirmDrawerOpen}>
                <Form labelCol={{span: 6}}
                      wrapperCol={{span: 20}}
                      onFinish={onConfirmOrder}>
                    <Form.Item label={"Name"}
                               rules={[{
                                   required: true,
                                   message: "Please enter your name"
                               }]}
                               name={'name'}>
                        <Input placeholder={"Enter your name"}/>
                    </Form.Item>
                    <Form.Item label={"Email"}
                               rules={[{
                                   required: true,
                                   type: "email",
                                   message: "Please enter correct email"
                               }]}
                               name={'email'}>
                        <Input placeholder={"Enter your email"}/>
                    </Form.Item>
                    <Form.Item label={"Address"}
                               rules={[{
                                   required: true,
                                   message: "Please enter your address"
                               }]}
                               name={'address'}>
                        <Input placeholder={"Enter your address"}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Cash on delivery</Checkbox>
                    </Form.Item>
                    <Button type={"primary"} htmlType={"submit"}>Confirm</Button>
                </Form>
            </Drawer>
        </>
    );
};

export default AppCart;