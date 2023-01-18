import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import {Table, Button} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import GetData from '../componate/Utils/GetData'

function EmpView() {

    const [storeData, setStoreData] = useState(GetData)
    const [EditInput, setEditInput] = useState(false)
    console.log( ">>>>" ,storeData);
    const location = useLocation()
    const navigate = useNavigate()
    // const storeData = location.state.data

    const Add = () => {
        navigate("/AddEmployee")
    }

    const handleEdit = () => {
        setEditInput(true)
        setStoreData()
    }

    const handleDelete = () => {
        
    }

    useEffect (() => {
        if (location.state) {
            localStorage.setItem("crud", JSON.stringify(location.state.data))
            setStoreData(location.state.data)
        } else {
            setStoreData(GetData)
        }
    }, [])

    return (
        <Container>
            <Button variant='primary' onClick={() => { Add() }}>AddEmployee</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeData.map((d, i) => {
                            return (
                                <tr key={i} id={i}>
                                    <td>{i + 1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.mobile}</td>
                                    <td>{d.address}</td>
                                    <td>{d.gender}</td>
                                    <td>{<Button variant="primary" type="button" onClick={() => { handleEdit(i, d) }}>Edit</Button>}</td>
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
    );
}

export default EmpView;