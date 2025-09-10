import Img_logo from '../../assets/img/logo.png';
import Img_search from '../../assets/img/icons/search.png';
import Img_user from '../../assets/img/icons/user.png';

import React, { useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export const Menu: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('inicio');

  const menuItems: MenuItem[] = [
    { id: 'banner', label: 'Home', href: '#banner' },
    { id: 'Services', label: 'Services', href: '#help' },
    { id: 'Products', label: 'Products', href: '#popular_residents' },
    { id: 'testemonials', label: 'testemonials', href: '#testemonials' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const handleClick = (id: string, href: string) => {
    setActiveItem(id);
    
    // Rola suavemente até a seção
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return(
    <header>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1">
          <nav className='menu flex justify-center'>
            <img src={Img_logo.src} alt="" className="logo" />
             <ul className="menu-list">
              {menuItems.map((item) => (
                <li key={item.id} className="menu-item">
                  <a
                    href={item.href}
                    className={`menu-link ${activeItem === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.id, item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="buttons">
              <ul>
                <li id="search-img"><a href="#"><img src={Img_search.src} /></a></li>
                <li id="user-img"><a href="#"><img src={Img_user.src} /></a></li>
                <li id="sing-up"><button className="btn bg_marrow_escuro text-white px-4 py-1 rounded-md text-sm cursor-pointer">Sign up</button></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
