// pages/index.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import axios from 'axios';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <ul>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
        <div className="icons">
          <span>ENG</span>
          <i className="icon-search"></i>
          <i className="icon-user"></i>
          <i className="icon-cart"></i>
        </div>
      </header>

      <main>
        <section className="intro">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <section className="filter-and-products">
          <aside className="filter">
            <h3>FILTER</h3>
            <ul>
              <li><input type="checkbox" /> CUSTOMIZABLE</li>
              <li>IDEAL FOR
                <ul>
                  <li><input type="checkbox" /> Men</li>
                  <li><input type="checkbox" /> Women</li>
                  <li><input type="checkbox" /> Babies & Kids</li>
                </ul>
              </li>
              <li>OCCASION</li>
              <li>WORK</li>
              <li>FABRIC</li>
              <li>SEGMENT</li>
              <li>SUITABLE FOR</li>
              <li>RAW MATERIALS</li>
              <li>PATTERN</li>
            </ul>

          </aside>


          <div className="products-container">

            <div className="products-header">
              <span>{products.length} ITEMS</span>

              <a href="" className="sho">HIDE FILTER</a>
              <a href="" className ="hid">SHOW FILTER</a>

              <select className="sort-options">
                <option>RECOMMENDED</option>
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE : HIGHTO LOW</option>
                <option>PRICE : LOW TO HIGH</option>

              </select>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <div className="product-item" key={product.id}>
                  <div className="product-img-wrapper">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                  {/* Favorite Heart Icon at the Bottom */}
                  <div className="favorite-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column">
              <h4>metta muse</h4>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4>CURRENCY</h4>
            <p>USD</p>
          </div>

          <div className="footer-social">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <i className="icon-instagram"></i>
              <i className="icon-linkedin"></i>
            </div>
            <h4>metta muse ACCEPTS</h4>
            <div className="payment-icons">
              <i className="icon-paypal"></i>
              <i className="icon-visa"></i>
              <i className="icon-mastercard"></i>
              <i className="icon-amex"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Home;
