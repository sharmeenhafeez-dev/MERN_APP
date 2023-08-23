import React, { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import { TbBrandSketch } from 'react-icons/tb';
import { BiCategory } from 'react-icons/bi';
import { TbBorderSides } from 'react-icons/tb';
import { TbBrandProducthunt } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [clickedTab, setClickedTab] = useState(null);

  const NavItems = [
    {
      tab: 'Home',
      link: '/',
      icons: <BiHome />,
    },
    {
      tab: 'Brands',
      link: '/brands',
      icons: <TbBrandSketch />,
    },
    {
      tab: 'Category',
      link: '/category',
      icons: <BiCategory />,
    },
    {
      tab: 'Orders',
      link: '/orders',
      icons: <TbBorderSides />,
    },
    {
      tab: 'Products',
      link: '/products',
      icons: <TbBrandProducthunt />,
    },
  ];

  const handleLinkClick = (link) => {
    setClickedTab(link);
  };

  return (
    <div className="col-md-12 text-white" style={{ height: '91.9vh' }}>
    <ul className="list-group p-3" style={{ listStyleType: 'none' }}>
      {NavItems?.map((val, key) => (
        <li
          key={key}
          className="list-group-item m-y text-white"
          style={{
            textDecoration: 'none',
            backgroundColor: clickedTab === val.link ? 'peachpuff' : 'transparent',
            transition: 'background-color 0.3s',
          }}
        >
          <Link
            to={val.link}
            className="text-white text-decoration-none list-style-none"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px',
              color: clickedTab === val.link ? 'black' : 'white',
            }}
            onClick={() => handleLinkClick(val.link)}
          >
            <span style={{ color: clickedTab === val.link ? 'black' : 'white' }}>
              {val.icons}
            </span>
            <span className="ms-2" style={{ color: clickedTab === val.link ? 'black' : 'white' }}>
              {val.tab}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
}
