// src/components/Header.tsx
import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="/images/logo.svg" alt="Saint Daniels" />
          <span className="logo-text">SAINT DANIELS</span>
        </div>
        <div className="nav-auth">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// src/styles/Header.css
.header {
  background-color: var(--dark-green);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--gold);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: var(--spacing-sm);
}

.logo-text {
  color: var(--gold);
  font-size: var(--font-xl);
  font-weight: 700;
  letter-spacing: 1px;
}

.login-btn {
  background-color: var(--gold);
  color: var(--dark-green);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--radius-sm);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #b8944d;
}

// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.svg" alt="Saint Daniels" />
              <span>SAINT DANIELS</span>
            </div>
            <p>Elevating healthcare experiences with rewards fit for royalty.</p>
            <div className="social-links">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">t</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">ig</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Rewards Catalog</a></li>
                <li><a href="#">Partner Providers</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>SUPPORT</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Saint Daniels Healthcare Rewards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/styles/Footer.css
.footer {
  background-color: var(--dark-green);
  color: var(--white);
  padding-top: var(--spacing-3xl);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: var(--spacing-3xl);
}

.footer-brand {
  flex: 0 0 100%;
  max-width: 350px;
  margin-bottom: var(--spacing-xl);
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.footer-logo img {
  height: 30px;
  margin-right: var(--spacing-sm);
}

.footer-logo span {
  color: var(--gold);
  font-size: var(--font-lg);
  font-weight: 700;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--gold);
  color: var(--dark-green);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 700;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: #b8944d;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3xl);
}

.link-group h4 {
  color: var(--gold);
  margin-bottom: var(--spacing-lg);
}

.link-group ul {
  list-style: none;
}

.link-group li {
  margin-bottom: var(--spacing-md);
}

.link-group a {
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--gold);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-lg) 0;
  text-align: center;
  font-size: var(--font-sm);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-links {
    margin-top: var(--spacing-xl);
  }
}
