import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  //const notify = () => toast("Wow so easy !");

  return(
    <div className="min-h-screen flex flex-col bg-amber-300 dark:bg-gray-200 elegance:bg-elegance-400 radiation:bg-radiation-700">
        <Header/>
        <ToastContainer/>
        <Main/>
        <Footer/>
    </div>
  );
};

export default App

/**
 * <ToastContainer 
            position='top-right'
            autoClose = {3000}
            hideProgressBar = {false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme='dark'
          />
 */