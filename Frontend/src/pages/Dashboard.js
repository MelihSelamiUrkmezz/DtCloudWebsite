import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import KubeconfigBox from '../components/Kubeconfigbox';


function DashboardPage() {
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('response');
    if (!token) {
      // kullanıcı oturum açmadı, oturum açma sayfasına yönlendir
      navigate('/login');
    }
  });

  return (
    <div>
      <NavigationBar />
      <center><h1>Dogus Technology Anthos Cluster Kubeconfigs</h1></center>
      <KubeconfigBox/>
    
    </div>
  );

}

export default DashboardPage;