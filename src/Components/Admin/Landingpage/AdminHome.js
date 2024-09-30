import Sidebar from '../components/sidebar';
import '../Landingpage/AdminHomeCss.css';

const AdminHome = () => {
  // Mock data: Replace with your actual API or state to fetch total products
  const totalProducts = 50; // Example total number of products posted by the user
  const categoryData = [
    { 
      name: "Men's Fashion", 
      total: 10, 
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" // Replace with actual image URL
    },
    { 
      name: "Women's Fashion", 
      total: 12, 
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    },
    { 
      name: "Kids' Fashion", 
      total: 8, 
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    },
    { 
      name: "Electronics", 
      total: 15, 
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    },
    { 
      name: "Jewelry", 
      total: 5, 
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    }
  ];

  return (
    <div className='admin-container'>
      <Sidebar />
      <div className='content' style={{ marginTop: '100px' }}>
        {/* Total products posted by the user */}
        <h1>Total Products Posted by You: {totalProducts}</h1>

        {/* Cards displaying total products in different categories */}
        <div className='card-container'>
          {categoryData.map((category, index) => (
            <div key={index} className='category-card'>
              <img src={category.img} alt={`${category.name}`} className='category-img' />
              <h2>{category.name}</h2>
              <p>Total Products: {category.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
