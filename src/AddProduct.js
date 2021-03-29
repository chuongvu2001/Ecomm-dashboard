import Header from './Header'
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
function AddProduct(){
    const [name,setName] = useState("");
    const [file,setFile] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const addProduct = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);
        // console.warn(name, file, price, description);
        let result = await fetch('http://localhost:8000/api/addProduct',{
            method:"POST",
            body: formData
        });
        alert('Data has been saved');

    }
    return (
        <div>
            <Header></Header>
            <div className="col-sm-6 offset-sm-3">
                <h2 className="text-center">Add Product</h2>
                <form action="">
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control mt-3" placeholder="name"/>
                    <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control mt-3" name="" id=""/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control mt-3" placeholder="price"/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control mt-3" placeholder="description"/>
                    <button type="submit" onClick={addProduct} className="btn btn-success mt-3">AddProduct</button>
                </form>
            </div>
        </div>
    )
}
export default AddProduct