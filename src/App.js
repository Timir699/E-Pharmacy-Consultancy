import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Components from './components/Components';
import ProductProvider from './context/ProductProvider';
import ServiceProvider from './context/ServiceProvider';
import CartProvider from './context/CartProvider';
import AuthProvider from './context/AuthProvider';
import PassProvider from './context/PassProvider';

function App() {
  return (
    <div className="App">
      <PassProvider>
        <AuthProvider>
          <CartProvider>
            <ProductProvider>
              <ServiceProvider>
                <Components />
              </ServiceProvider>
            </ProductProvider>
          </CartProvider>
        </AuthProvider>
      </PassProvider>
    </div>
  );
}

export default App;
