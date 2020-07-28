import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button, Descriptions } from 'antd';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function ProductInfo(props) {
    const user = useSelector(state => state.user)

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }
    if(user.userData && user.userData.isAdmin){
        return (
            <div>
                <Descriptions title="Información">
                    <Descriptions.Item label="Precio"> {Product.price}</Descriptions.Item>
                    <Descriptions.Item label="Autor">{Product.author}</Descriptions.Item>
                    <Descriptions.Item label="Tecnología">{Product.subject}</Descriptions.Item>
                    <Descriptions.Item label="Vendidos">{Product.sold}</Descriptions.Item>
                    <Descriptions.Item label="Vistas"> {Product.views}</Descriptions.Item>
                    <Descriptions.Item label="Descripción"> {Product.description}</Descriptions.Item>
                </Descriptions>
    
                <br />
                <br />
                <br />
            </div>
        )
    }
    else{
        return (
            <div>
                <Descriptions title="Información">
                    <Descriptions.Item label="Precio"> {Product.price}</Descriptions.Item>
                    <Descriptions.Item label="Autor">{Product.author}</Descriptions.Item>
                    <Descriptions.Item label="Tecnología">{Product.subject}</Descriptions.Item>
                    <Descriptions.Item label="Vendidos">{Product.sold}</Descriptions.Item>
                    <Descriptions.Item label="Vistas"> {Product.views}</Descriptions.Item>
                    <Descriptions.Item label="Descripción"> {Product.description}</Descriptions.Item>
                </Descriptions>
    
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="large" shape="round" type="danger"
                        onClick={addToCarthandler}
                    >
                        Añadir a Carrito
                        </Button>
                </div>
            </div>
        )
    }

}

export default ProductInfo
