import React, { useEffect, useState } from 'react';
import { Tabs,Card } from 'antd';
import Sidebar from '../sidebar';
import '../ManageProducts/manageProducts.css'; // Ensure this path is correct
import {getAllProductsList} from '../../../../Request/Requiests'




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


  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  useEffect(() => {
    getAllProductsList().then((res) => {
      setProductList(res.data);
      setFilteredProducts(res.data.filter(product => product.category === categoryMapping[activeKey]));
      // console.log(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredProducts(productList.filter(product => product.category === categoryMapping[activeKey]));
  }, [activeKey, productList]);
  
  return (
    <div style={{ marginTop: '150px' }}>
    <Sidebar />
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
                {filteredProducts.map(product => (
                  <Card
                    key={product._id}
                    title={product.title}
                    style={{ width: 300, margin: '10px' }}
                    cover={<img alt={product.title} src={product.image} />}
                  >
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-success'>Update</button>
                  </Card>
                ))}
              </div>
            )
          }))}
        />
      </div>
    </div>
  </div>  );
}

export default ManageProducts;
