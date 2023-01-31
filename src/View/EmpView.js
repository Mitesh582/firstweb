import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Table, Button, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GetData from '../componate/Utils/GetData'
import { DataGrid } from '@mui/x-data-grid';

function EmpView() {

    const columns = [
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
          field: 'mobile',
          headerName: 'Mobile',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 110,
          editable: true,
        },
        {
          field: 'gender',
          headerName: 'Gender',
          type: 'radio',
          width: 110,
          editable: true,
        }
      ];

    const [storeData, setStoreData] = useState(GetData)
    const [EditInput, setEditInput] = useState(false)
    const [isSave, setSave] = useState(false);
    const [editinitial, setEditInitial] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        gender: ''
    });
    const [indexId, setIndexId] = useState('');

    // const [SearchPro, setSearchPro] = useState({
    //     search: ''
    // })

    const ChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(value);
        if (EditInput) {
            setEditInitial({ ...editinitial, [name]: value })
        }
    }

    // console.log(">>>>", storeData);
    const navigate = useNavigate()
    // const storeData = location.state.data

    const Add = () => {
        navigate("/AddEmployee")
    }

    const handleEdit = (i, d) => {
        setEditInput(true);
        setEditInitial(d);
        setIndexId(i);
        setSave(false);
    }

    const handleSave = (index) => {
        setEditInput(false)
        setSave(true);
        setEditInitial({
            name: '',
            email: '',
            mobile: '',
            address: '',
            gender: ''
        });
        const array = storeData;
        array[index] = editinitial
        setStoreData([...array])
    }

    const handleDelete = (id) => {
        console.log("handleDelete", id);
        if (isSave) {
            setSave(false);
        } else {
            setSave(true);
        }
        const filterData = storeData.filter((d, i) => {
            return i !== id;
        })
        setStoreData([...filterData])

        console.log(filterData);
    }

    // const handleSearch = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value

    //     setSearchPro({ [name]: value })

    //     const filterName = storeData.filter((data) => {

    //         return data.name.toLocaleLowerCase().search(value) !== -1
    //     })
    //     setStoreData([...filterName])
    // }

    // const SortData = (key, type) => {
    //     const SortedData = [...storeData].sort((ProA, ProB) => {
    //         if (type === 'low') {
    //             return ProA[key] - ProB[key]
    //         } else if (type === 'asc') {
    //             return ProA[key].localeCompare(ProB[key])
    //         } else if (type === 'dsc') {
    //             return ProB[key].localeCompare(ProA[key])
    //         }
    //     })
    //     setStoreData(SortedData)
    // }

    // useEffect(() => {
    //     if (location.state) {
    //         localStorage.setItem("crud", JSON.stringify(location.state.data))
    //         setStoreData(location.state.data)
    //     } else {
    //         setStoreData(GetData)
    //     }
    // }, [])

    useEffect(() => {
        // console.log("USeEffect Save");
        localStorage.setItem("crud", JSON.stringify(storeData));
    }, [isSave])

    return (
        <Container>
            <Row>
                <Button variant='primary' onClick={() => { Add() }}  style={{ textTransfrom: "capitalize" }} className="col-2">AddEmployee</Button>
                {/* <div className="col-2">
                    <Form.Control placeholder="Search" name="search" value={SearchPro.search} onChange={((e) => (handleSearch(e)))} />
                </div>
                <div className="mt-2">
                    <Button onClick={(() => (SortData("mobile", "low")))} className="col-2">
                        1-0
                    </Button>
                    <Button onClick={(() => (SortData("name", "asc")))} className="col-2">
                        A-Z
                    </Button>
                    <Button onClick={(() => (SortData("name", "dsc")))} className="col-2">
                        Z-A
                    </Button>
                    </div> */}
                {/* <Table striped bordered hover className="mt-4">
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
                                        <td>{
                                            EditInput && indexId === i ? <Form.Group className="mb-3">
                                                <Form.Control type="name" placeholder="Enter Name"
                                                    name='name'
                                                    value={editinitial.name}
                                                    onChange={(e) => { ChangeInput(e) }} />
                                            </Form.Group> : d.name
                                        }</td>
                                        <td>{
                                            EditInput && indexId === i ? <Form.Group className="mb-3">
                                                <Form.Control type="email" placeholder="Enter Email"
                                                    name='email'
                                                    value={editinitial.email}
                                                    onChange={(e) => { ChangeInput(e) }} />
                                            </Form.Group> : d.email
                                        }</td>
                                        <td>{
                                            EditInput && indexId === i ? <Form.Group className="mb-3">
                                                <Form.Control type="mobile" placeholder="Enter Mobile Number"
                                                    name='mobile'
                                                    value={editinitial.mobile}
                                                    onChange={(e) => { ChangeInput(e) }} />
                                            </Form.Group> : d.mobile
                                        }</td>
                                        <td>{
                                            EditInput && indexId === i ? <Form.Group className="mb-3">
                                                <Form.Control type="text" placeholder="Enter Address"
                                                    name='address'
                                                    value={editinitial.address}
                                                    onChange={(e) => { ChangeInput(e) }} />
                                            </Form.Group> : d.address
                                        }</td>
                                        <td>{
                                            EditInput && indexId === i ? <Form.Group>
                                                <Form.Check
                                                    inline
                                                    label="Male"
                                                    name="gender"
                                                    type='radio'
                                                    value="male"
                                                    checked={editinitial.gender === 'male'}
                                                    onChange={(e) => { ChangeInput(e) }}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Female"
                                                    name="gender"
                                                    type='radio'
                                                    value="female"
                                                    checked={editinitial.gender === 'female'}
                                                    onChange={(e) => { ChangeInput(e) }}
                                                />
                                            </Form.Group> : d.gender}</td>
                                        <td>
                                            {
                                                EditInput && indexId === i ? <Button variant="primary" onClick={() => { handleSave(i, d) }}>Save</Button> : <Button variant="primary" type="button" onClick={() => { handleEdit(i, d) }}>Edit</Button>
                                            }
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => { handleDelete(i) }}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> */}
            </Row>

            <div style={{height : "500px"}}>
                <DataGrid 
                    rows={storeData}
                    columns={columns}qwo
                    pageSize={5}
                />
            </div>
        </Container>
    );
}

export default EmpView;