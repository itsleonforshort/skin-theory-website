import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './lib/CartProvider';
import { ThemeProvider } from './lib/ThemeProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';
import { TheoryPage } from './pages/TheoryPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmedPage } from './pages/OrderConfirmedPage';
import { ShippingReturnsPage } from './pages/ShippingReturnsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ScrollToTop />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/the-theory" element={<TheoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
            <Route path="/shipping-and-returns" element={<ShippingReturnsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-sale" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </ThemeProvider>
  );
}
