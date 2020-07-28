import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.onSuccess(payment);
        
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);

        }

        let env = 'sandbox'; 
        let currency = 'MXN'; 
        let total = this.props.toPay; 

        const client = {
            sandbox: 'AdetMx4MzKp3XV7JpGzeO50Z-XPOWt5bEGKTYYqGrOKHShAshR8bRTaVph-deiY1JPZCyYt-m99HAdy4',
            // en caso de sacarlo a producción production: 'YOUR-PRODUCTION-APP-ID',
        }


        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{ 
                    size:'large',
                    color:'blue',
                    shape: 'rect',
                    label: 'checkout'
                }}
                 />
        );
    }
}