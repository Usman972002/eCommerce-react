import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, SetSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [brand,setBrand] = useState("");
  const [size,setSize] = useState("");
  const [image,setImage] = useState(null);

  const handleSave = async () =>{
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('subcategory', subcategory);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('brand', brand);
    formData.append('size', size);
    formData.append('image', image);

    try {
      await axios.post('/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Product added successfully, you can perform any necessary actions here
    } catch (error) {
      // Handle error
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='product__page'>
      <div className='add__product__form'>
        <h1>
          Add Product
        </h1>
        <div className='param__1'>
          <label>Title</label>
          <input type='text' className='product__title' onChange={(e)=>{setTitle(e.target.value)}}></input>
        </div>
        <div className='param__7'>
          <label>Brand</label>
          <input type='text' className='product__brand' onChange={(e)=>{setBrand(e.target.value)}}></input>
        </div>
        <div className='param__2'>
          <label>Category</label>
          <input type='text' className='product__category' onChange={(e)=>{setCategory(e.target.value)}}></input>
        </div>
        <div className='param__3'>
          <label>Sub category</label>
          <input type='text' className='product__subcategory' onChange={(e)=>{SetSubcategory(e.target.value)}}></input>
        </div>
        <div className='param__8'>
          <label>Size</label>
          <input type='text' className='product__size' onChange={(e)=>{setSize(e.target.value)}}></input>
        </div>
        <div className='param__4'>
          <label>Description</label>
          <textarea className='product__description' onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        </div>
        <div className='param__5'>
          <label>Price</label>
          <input type='text' className='product__price' onChange={(e)=>{setPrice(e.target.value)}}></input>
        </div>
        <div className='param__6'>
          <label>Image</label>
          <input type="file" accept="image/*" className='product__image' onChange={(e)=>{setImage(e.target.files[0])}}></input>
        </div>
        <button className='save__button' onClick={handleSave}>Save Product</button>
      </div>
    </div>
  )
}

export default AddProduct