import React from 'react'
import './AddProduct.css'

const AddProduct = () => {
  return (
    <div className='product__page'>
        <div className='add__product__form'>
            <h1>
                Add Product
            </h1>
            <div className='param__1'>
                <label>Title</label>
                <input type='text' className='product__title'></input>
                </div>
                <div className='param__2'>
                <label>Category</label>
                <input type='text' className='product__category'></input>
                </div>
                <div className='param__3'>
                <label>Sub category</label>
                <input type='text' className='product__subcategory'></input>
                </div>
                <div className='param__4'>
                <label>Description</label>
                {/* <input type='text' className='product__Description'></input> */}
                <textarea className='product__description'></textarea>
                </div>
                <div className='param__5'>
                <label>Price</label>
                <input type='text' className='product__price'></input>
                </div>
                <div className='param__6'>
                <label>Image</label>
                <input type="file" accept="image/*" className='product__image'></input>
                </div>
                <button className='save__button'>Save Product</button>                
        </div>
    </div>
  )
}

export default AddProduct