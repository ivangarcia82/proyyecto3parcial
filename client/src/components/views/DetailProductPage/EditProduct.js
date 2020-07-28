import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

function EditProduct(props) {

    const productId = props.match.params.productId
    const [TitleValue, setTitleValue] = useState("")
    const [AuthorValue, setAuthorValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [SubjectValue, setSubjectValue] = useState("")

    const [Images, setImages] = useState([])
    const [Pdfs, setPdfs] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }
    const onSubjectChange = (event) => {
        setSubjectValue(event.currentTarget.value)
    }

    const onAuthorChange = (event) => {
        setAuthorValue(event.currentTarget.value)
    }


    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }


    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const updatePdfs = (newPdfs) => {
        setPdfs(newPdfs)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            title: TitleValue,
            author: AuthorValue,
            subject: SubjectValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            pdfs: Pdfs
        }

        Axios.put(`/api/product/${productId}`, variables)
            .then(response => {
                if (response.data.success) {
                    alert('Producto Actualizado')
                    props.history.push('/')
                } else {
                    alert('Producto Actualizado')
                    props.history.push('/')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Actualizar Producto</Title>
            </div>


            <Form onSubmit={onSubmit} >
                <label>Imagen</label>
                <FileUpload refreshFunction={updateImages} />
                <br />
                <br />
                <label>PDF</label>
                <FileUpload refreshFunction={updatePdfs} />
                <br />
                <br />

                <label>Nombre</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Autor</label>
                <Input
                    onChange={onAuthorChange}
                    value={AuthorValue}
                />
                <br/>
                <br/>
                <label>Tecnología</label>
                <Input
                    onChange={onSubjectChange}
                    value={SubjectValue}
                />
                <br/>
                <br/>
                <label>Descripción</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Precio($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />

                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Actualizar Producto
                </Button>

            </Form>

        </div>
    )
}

export default EditProduct
