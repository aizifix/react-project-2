import Header from './Header.jsx'
import Search from './Search.jsx'
import Button from './Button/Button.jsx'
import Footer from './Footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="search-container">
          <Search />
          <Button />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
