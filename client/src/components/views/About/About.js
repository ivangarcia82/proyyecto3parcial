import React from 'react';
import { Typography} from 'antd';

const { Title } = Typography;

function About(){
    return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Title level={2}>Nosotros</Title>
                </div>

                <div>
                    <h2>Conocenos</h2>
                    <h3>Somos una empresa dedicada a la venta de manuales por virtuales enfocados al área de tecnología</h3>
                    <h2>Misión</h2>
                    <h3>Nuestra misión es brindar seguridad a nuestros usuarios a través de una plataforma segura y fácil de usar</h3>
                    <h2>Visión</h2>
                    <h3>Posicionarnos como la plataforma número 1 en venta y distribución de manuales digitales de la península de Yucatán</h3>
                </div>
        </div>
    )
}


export default About
