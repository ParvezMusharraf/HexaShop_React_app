import React, { useEffect, useState } from 'react';
import { Tabs,Card } from 'antd';
import Sidebar from '../sidebar';
import '../ManageProducts/manageProducts.css'; // Ensure this path is correct
import {getAllProductsListByUserID,deleteProductById} from '../../../../Request/Requiests'




const ManageProducts = () => {

  const initialItems = [
    {
      label: 'Men',
      children: 'Men\'s Products',
      key: '1',
      closable: false,
    },
    {
      label: 'Women',
      children: 'Women\'s Products',
      key: '2',
      closable: false,
    },
    {
      label: 'Kids',
      children: 'Kids\' Products',
      key: '3',
      closable: false,
    },
    {
      label: 'Electronics',
      children: 'Electronics',
      key: '4',
      closable: false,
    },
    {
      label: 'Jewelry',
      children: 'Jewelry',
      key: '5',
      closable: false,
    },
  ];

  const categoryMapping = {
    '1': "men's clothing",
    '2': "women's clothing",
    '3': "kid's clothing",
    '4': "electronics",
    '5': "jewelery"
  };

  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const [productList,setProductList]= useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dataexist,setDataExist] = useState(false)


  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const useridfsd = localStorage.getItem("userId")

  useEffect(() => {
    getAllProductsListByUserID({userid:useridfsd}).then((res) => {

      if(res?.msg == "No products found for the user"){
      setDataExist(true)
        return   
        }
      setProductList(res);
      setFilteredProducts(res?.filter(product => product.category === categoryMapping[activeKey]));
      // console.log(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredProducts(productList?.filter(product => product.category === categoryMapping[activeKey]));
  }, [activeKey, productList]);


  const handleDelete = async(productId)=>{
    try {
      const res = await deleteProductById(productId);
      alert("Product deleted successfully");
    } catch (error) {
      alert("Failed to delete product");
    }
  };
  
  return (
    <div style={{ marginTop: '150px' }}>
    <Sidebar />

    {
      dataexist ? <>
      <div className='justify-content-center align-item-center d-flex'> <h1>There is no data for selected user</h1></div>
      </> :
    <div>
      <div className="custom-tabs">
        <Tabs
          type="card"
          onChange={onChange}
          activeKey={activeKey}
          items={items.map(item => ({
            ...item,
            children: (
              <div className="product-grid">
                {filteredProducts?.map(product => (
                  <Card
                    key={product._id}
                    title={product.title}
                    style={{ width: 300, margin: '10px' }}
                    cover={<img alt={product.title} src={product.image} />}
                  >
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button className='btn btn-danger' onClick={()=>handleDelete(product._id)}>Delete</button>
                    <button className='btn btn-success'>Update</button>
                  </Card>
                ))}
              </div>
            )
          }))}
        />
      </div>
    </div>
    }
  </div>  );
}

export default ManageProducts;
