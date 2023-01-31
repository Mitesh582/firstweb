import React, { useState } from "react";
import { products } from "../../constant/products";
import { UniqData } from "../../componate/Utils/UniqData";
import { Button, Card, Row, Container, Form } from "react-bootstrap";

function Products() {

    const [allProducts, setAllProducts] = useState(products)
    // console.log("allProducts", allProducts);

    const [SearchPro, setSearchPro] = useState({
        search: ''
    })

    const categorys = UniqData(products, "category")
    // console.log(categorys, "categorys");

    const filterList = (category) => {
        // console.log("category", category);

        const filterData = products.filter((data) => {
            if (category === "all") {
                return products
            }
            return data.category === category
        })
        // console.log(filterData, "filterData");
        setAllProducts(filterData)
    }

    const handleSearch = (e) => {
        const name = e.target.name
        const value = e.target.value

        setSearchPro({ [name]: value })

        const filterTitle = products.filter((data) => {

            return data.title.toLocaleLowerCase().search(value) !== -1
        })
        setAllProducts(filterTitle)
    }

    const SortData = (key, type) => {
        const SortedData = [...allProducts].sort((ProA, ProB) => {
            if (type === 'low') {
                return ProA[key] - ProB[key]
            } else if (type === 'high') {
                return ProB[key] - ProA[key]
            } else if (type === 'asc') {
                return ProA[key].localeCompare(ProB[key])
            } else if (type === 'dsc') {
                return ProB[key].localeCompare(ProA[key])
            }
        })
        setAllProducts(SortedData)
    }

    return (
        <>
            <Container>
                <Row>
                    <div className="col-9">
                        <Button onClick={(() => filterList("all"))}>All</Button>
                        {
                            categorys.map((category, i) => {

                                return (
                                    <Button style={{ textTransfrom: "capitalize" }} onClick={(() => filterList(category))} key={i} id={i}>
                                        {
                                            category
                                        }
                                    </Button>
                                )
                            })
                        }
                    </div>
                    <div className="col-2">
                        <Form.Control placeholder="Search" name="search" value={SearchPro.search} onChange={((e) => (handleSearch(e)))} />
                    </div>
                    <div className="mt-2">
                    <Button onClick={(() => (SortData("price", "low")))} className="col-2">
                        Low Price
                    </Button>
                    <Button onClick={(() => (SortData("price", "high")))} className="col-2">
                        High Price
                    </Button>
                    <Button onClick={(() => (SortData("title", "asc")))} className="col-2">
                        A-Z
                    </Button>
                    <Button onClick={(() => (SortData("title", "dsc")))} className="col-2">
                        Z-A
                    </Button>
                    </div>
                </Row>
            </Container>
            <Container className="mt-3">
                <Row>
                    {
                        allProducts.map((product, i) => {
                            return (
                                <Card style={{ width: '18rem' }} key={i} id={i}>
                                    <Card.Img variant="top" src={product.thumbnail} style={{ height: '10rem' }} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{`${product.price} Rs.`}</Card.Text>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
export default Products