import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <nav className="main--nav p-3 ">
        {/* 1st logo part  */}
        <div className="main--nav__logo">
          <figure className="">
            <img src="././metalogo.png" alt="logo"></img>
          </figure>
          <div className="main--nav__logo__name h4">Metalogic</div>
        </div>

        {/* 2nd menu part  */}
        <div className="main--nav__menu--link">
          <ul>
            <li>
              <a className="" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="" href="/about">
                Service
              </a>
            </li>
            <li>
              <a className="" href="/service">
                Aboutus
              </a>
            </li>
            <li>
              <a className="" href="/service">
                Blog
              </a>
            </li>
            <li>
              <a className="" href="/carerr">
                Carreer
              </a>
            </li>
          </ul>
        </div>
        <div className="main--nav__btn ">
          <button className="">Get in touch</button>
        </div>

        {/* 3rd pages links */}
        <div className="main--nav__bar">
          {/* <button onClick={openModal} className=''>fff</button> */}
          <FontAwesomeIcon onClick={openModal} icon={faBars} />
          <Modal
            className="modal"
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <form className="modal--form">
              <div>Home</div>
              <div>Services</div>
              <div>Carrerr</div>
              <div>Blogs</div>
              <div>About Us</div>
            </form>
            <button className="modal--button" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
      </nav>
    </>
    // <nav>
    //     <div >
    //        <figure>
    //           <img src='' alt='logo'></img>
    //        </figure>
    //        <div>Metalogic</div>
    //     </div>
    //     <div>
    //         <a href=''>Home</a>
    //         <a href=''>Service</a>
    //         <a href=''>Carrerr</a>
    //         <a href=''>Blog</a>
    //         <a href=''>About Us</a>
    //     </div>
    //     <button>Get in Touch</button>
    // </nav>
  );
};

export default Navbar;
