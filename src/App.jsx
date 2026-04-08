import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return(
    <div className="min-h-screen flex flex-col bg-blue-300 dark:bg-gray-200 elegance:bg-elegance-400 radiation:bg-radiation-700">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
};

export default App
