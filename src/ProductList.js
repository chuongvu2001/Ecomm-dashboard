import Header from './Header'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
function ProductList() {
    const [data, setData] = useState([]);
    useEffect( async () => {
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result);
    }, []);
    console.log('abc',data);
    return (
        <div>
            <Header></Header>
            <h2>ProductList</h2>
            <Table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Image</td>
                    <td>Price</td>
                    <td>Description</td>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => {
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src="{item.file_path}" alt=""/></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}
export default ProductList