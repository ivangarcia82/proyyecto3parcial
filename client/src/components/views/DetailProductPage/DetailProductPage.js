import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios'
import { Row, Col, Button } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch, useSelector } from 'react-redux';



function DetailProductPage(props) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }

    const deleteProduct = () => {
        Axios.delete(`/api/product/${productId}`)
        .then(response => {
            if (response.data.success) {
                alert('Producto Eliminado')
                props.history.push('/')
            } else {
                alert('Producto Eliminado')
                props.history.push('/product/upload')
            }
        })

    }

    if (user.userData && user.userData.isAdmin) {
        return (
            <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{Product.title}</h1>
                </div>

                <br />

                <Row gutter={[16, 16]} >
                    <Col lg={12} xs={24}>
                        <ProductImage detail={Product} />
                    </Col>
                    <Col lg={12} xs={24}>
                        <ProductInfo
                            addToCart={addToCartHandler}
                            detail={Product} />
                        <Button size="large" shape="round" type="danger"
                            onClick={deleteProduct}
                        >
                            Borrar Producto
                            </Button>
                        <Link to={`/edit/${productId}`}>
                            <Button size="large" shape="round" type="danger"
                            >
                                Actualizar Producto
                            </Button>
                        </Link>

                    </Col>
                </Row>
            </div>
        )
    }

    else {
        return (
            <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{Product.title}</h1>
                </div>

                <br />

                <Row gutter={[16, 16]} >
                    <Col lg={12} xs={24}>
                        <ProductImage detail={Product} />
                    </Col>
                    <Col lg={12} xs={24}>
                        <ProductInfo
                            addToCart={addToCartHandler}
                            detail={Product} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DetailProductPage
