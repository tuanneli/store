import React, {Fragment, useState} from 'react';
import './HeaderApp.scss';
import {Badge, Drawer, Menu, Typography} from "antd";
import {HomeFilled, ShoppingCartOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {Categories} from "../interfaces/api-interfaces";
import AppCart from "./AppCart";

const HeaderApp = () => {

    const navigate = useNavigate();

    const onMenuClick = (item: ItemType) => {
        navigate(`/${item?.key}`)
    }

    return (
        <div className={'appHeader'}>
            <div style={{width: 500}}>
                <Menu
                    // disabledOverflow
                    onClick={onMenuClick}
                    mode={'horizontal'}
                    items={[
                        {
                            label: [<HomeFilled/>, ' Home'],
                            key: 'home'
                        },
                        {
                            label: 'Men',
                            key: 'men',
                            children: [
                                {
                                    label: 'Shirts',
                                    key: Categories.MENS_SHIRTS
                                },
                                {
                                    label: 'Shoes',
                                    key: Categories.MENS_SHOES
                                },
                                {
                                    label: 'Watches',
                                    key: Categories.MENS_WATCHES
                                },
                            ]
                        },
                        {
                            label: 'Women',
                            key: 'women',
                            children: [
                                {
                                    label: 'Shoes',
                                    key: Categories.W0MENS_SHOES
                                },
                                {
                                    label: 'Bags',
                                    key: Categories.WOMENS_BAGS
                                },
                                {
                                    label: 'Jewellery',
                                    key: Categories.WOMENS_JEWELLERY
                                },
                                {
                                    label: 'Dresses',
                                    key: Categories.WOMENS_DRESSES
                                },
                                {
                                    label: 'Watches',
                                    key: Categories.WOMENS_WATCHES
                                },
                            ]
                        },
                        {
                            label: 'Tech',
                            key: 'tech',
                            children: [
                                {
                                    label: 'Smartphones',
                                    key: Categories.SMARTPHONES,
                                },
                                {
                                    label: 'Laptops',
                                    key: Categories.LAPTOPS,
                                },
                                {
                                    label: 'Automotive',
                                    key: Categories.AUTOMOTIVE,
                                },
                                {
                                    label: 'Motorcycles',
                                    key: Categories.MOTORCYCLE,
                                },
                            ]
                        },
                    ]}
                />
            </div>
            <Typography.Title
                style={{userSelect: 'none', overflow: 'hidden', display: 'inline-block', width: 100, height: 60}}
                level={2}>IStore</Typography.Title>
            <AppCart/>
        </div>
    );
};

export default HeaderApp;