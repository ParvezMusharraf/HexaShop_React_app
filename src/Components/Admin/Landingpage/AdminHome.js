import Sidebar from '../components/sidebar';
import '../Landingpage/AdminHomeCss.css'
const AdminHome = () => {
  return (
    <div className='admin-container'>
      <Sidebar/>
      <div className='content' style={{ marginTop: '100px' }}>
        <h1>This page is under Construction</h1>
      </div>
    </div>
  );
};

export default AdminHome;