import React,{useEffect,useState} from 'react';
import "./nav.css";
function Nav() {
    const [show,handleShow] =useState(false);
    useEffect(() => {
      window.addEventListener("scroll",() => {
        if(window.scrollY > 100) {
          handleShow(true);
        }else handleShow(false); 
      });
      return ()=> {
        window.removeEventListener("scroll",null);
      };
    },[]);  
  return (
    <div className={`nav ${ show && "nav__black"}`}>
        <img
        className="nav__logo"
        src="https://www.pngall.com/wp-content/uploads/13/Netflix-Logo-PNG-Picture.png"
        alt="Netflix Logo"
        />
        <img
        className="nav__avator"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
        alt="Avator Logo" 
        />
    </div>
  );
}
export default Nav;

