import { Link } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">My Daily Audio Digest</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/settings" className="nav-link">Settings</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};