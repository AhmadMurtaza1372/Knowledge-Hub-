
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ConnectWithUs from './components/ConnectWithUs';
import Mainpage from './components/Mainpage';
import Card from './components/Card';
import Modal from './components/Modal';
import Signup from './components/Signup';
import Login from './components/Login';
import Bookstore from './components/Bookstore';
import { AuthProvider, useAuth } from './components/AuthContext'; 

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Signup', element: <Signup /> },
    { path: '/Login', element: <Login /> },
    { path: '/About', element: <About /> },
    { path: '/ConnectWithUs', element: <ConnectWithUs /> },
    { path: '/Mainpage', element: <Mainpage /> },
    { path: '/card', element: <Card /> },
    { path: '/modal', element: <Modal /> },
    { path: '/bookstore',
      element: isAuthenticated ? <Bookstore /> : <Navigate to="/Login" replace />
    },
    { path: '*', element: <h1>Page not found</h1> },
  ]);
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
