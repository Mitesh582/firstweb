import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


const GetFormData = () => {
    const FormData = localStorage.getItem("MyForm")
    if (FormData) {
        return JSON.parse(FormData)
    } else {
        return [];
    }
}

function CRUD() {

    const [initial, setInitial] = useState({
        name: '',
        email: ''
    });
    const [storedata, setStoredata] = useState(GetFormData());
    const [Editinput, setEditInput] = useState(false);
    const [editinitial, setEditInitial] = useState({
        name: '',
        email: ''
    });
    const [indexId, setIndexId] = useState('');

    const ChangeInput = (e) => {
        const data = e.target.name;
        const value = e.target.value;
        // console.log(value);
        if (Editinput) {
            setEditInitial({ ...editinitial, [data]: value })
        }
        else {
            setInitial({ ...initial, [data]: value });
        }
    }

    const HandleChange = (e) => {
        const FieldName = e.target.name;
        const value = e.target.value;
        setInitial({ ...initial, [FieldName]: value });
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        setStoredata([...storedata, initial]);
        setInitial({
            name: '',
            email: ''
        });
    }

    const handleEdit = (i, v) => {
        setEditInput(true);
        setEditInitial(v);
        setIndexId(i);
    }

    const handleSave = (index) => {
        setEditInput(false)
        setEditInitial({
            name: '',
            email: ''
        });
        const array = storedata;
        array[index] = editinitial
        setStoredata([...array])
    }

    const handleDelete = (id) => {
        const filterData = storedata.filter((v, i) => {
            return i !== id;
        })
        setStoredata(filterData)
    }

    useEffect(() => {
        localStorage.setItem('MyForm', JSON.stringify(storedata))
    }, [storedata])


    return (
        <>
            <h1>CRUD</h1>
            <Container>
                <Form onSubmit={SubmitForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name='name' value={initial.name} onChange={(e) => { HandleChange(e) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => { HandleChange(e) }} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
                <br />

                <h1> DataList :-</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storedata.map((v, i) => {
                                return (
                                    <tr key={i} id={i}>
                                        <td>{i + 1}</td>
                                        <td>
                                            {
                                                Editinput && indexId === i ? <Form.Group className="mb-3">
                                                    <Form.Control type="name" placeholder="Enter Name"
                                                        name='name'
                                                        value={editinitial.name}
                                                        onChange={(e) => { ChangeInput(e) }} />
                                                </Form.Group> : v.name
                                            }
                                        </td>
                                        <td>
                                            {
                                                Editinput && indexId === i ? <Form.Group className="mb-3">
                                                    <Form.Control type="name" placeholder="Enter Name"
                                                        name='email'
                                                        value={editinitial.email}
                                                        onChange={(e) => { ChangeInput(e) }} />
                                                </Form.Group> : v.email
                                            }
                                        </td>
                                        <td>
                                            {
                                                Editinput && indexId === i ? <Button variant="primary" onClick={() => { handleSave(i, v) }}>Save</Button> : <Button variant="primary" type="button" onClick={() => { handleEdit(i, v) }}>Edit</Button>
                                            }
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => { handleDelete(i) }}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default CRUD;