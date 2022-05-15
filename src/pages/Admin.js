import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../components/admin/SidebarData';
import '../components/admin/Admin.css';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

function Admin() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
    
  return (
    <>
        <br /><br /><br />
        <div className='admin-nav'>
          <Link to='#' className='admin-menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h3 className="title">İSTANBUL UNIVERSITESI - CERRAHPAŞA</h3>
        </div>
        <div>
        <nav className={sidebar ? 'admin-nav-menu active' : 'admin-nav-menu'}>
          <ul className='admin-nav-menu-items' onClick={showSidebar}>
            <li className='admin-navbar-toggle'>
              <a href='#' className='admin-menu-bars'>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href="{item.path}" className={item.icon}>
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
        <div className=' toggle admin-container-fluid pt-4 px-4'>
                <div className='row g-4'>
                  <div className='column'>
                        <div className='admin-container rounded '>
                            <i className='fa fa-chart-line fa-3x text-white'></i>
                            <div>
                                <p className=' text-white'>Toplam Duyurular</p>
                                <h2 className=' text-white'>12</h2>
                            </div>
                        </div>

                  </div>
                  <div className='column'>
                        <div className='admin-container rounded '>
                            <i className='fa fa-chart-bar fa-3x text-white'></i>
                            <div class="ms-3">
                                <p className=' text-white'>Toplam Etkinlikler</p>
                                <h2 className=' text-white'>4</h2>
                            </div>
                        </div>
                  </div>
                  <div className='column'>
                        <div class="admin-container rounded ">
                            <i class="fa fa-chart-area fa-3x text-white"></i>
                            <div class="ms-3">
                                <p className=' text-white'>Toplam Haberler</p>
                                <h2 className=' text-white'>7</h2>
                            </div>
                        </div>
                  </div>
                </div>
                <div>
                  <h1 className='padding-top-2 justify-to-left'><b>İlk 5 Duyuru</b></h1>
                  <table className='row '>
                      <tr>
                        <th className='row-border column admin-container text-white'>Duyuru Başlık</th>
                        <th className='row-border column admin-container text-white'>Duyuru Açıklama</th>
                        <th className='row-border column admin-container text-white'>Duyuru Linki</th>
                      </tr>
                      <tr className=' padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem ipsum dolor sit amet...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Ipsum Lorem </td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum amet sit dolor...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>LoremIpsum</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum Lorem Lorem Sit dolor amet...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Ipsum Dolor!</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Consectetur adipiscing elit...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Amet Sit</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Morbi vulputate tempor mi</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                  </table>
                  <h1 className='padding-top-2 justify-to-left'><b>İlk 5 Etkinlik</b></h1>
                  <table className='row '>
                      <tr>
                        <th className='row-border column admin-container text-white'>Etkinlik Başlık</th>
                        <th className='row-border column admin-container text-white'>Etkinlik Açıklama</th>
                        <th className='row-border column admin-container text-white'>Etkinlik Linki</th>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem ipsum dolor sit amet...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Ipsum Lorem </td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum amet sit dolor...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>LoremIpsum</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum Lorem Lorem Sit dolor amet...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Ipsum Dolor!</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Consectetur adipiscing elit...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                  </table>
                  <h1 className='padding-top-2 justify-to-left'><b>İlk 5 Haber</b></h1>
                  <table className='row '>
                      <tr>
                        <th className='row-border column admin-container text-white'>Haber Başlık</th>
                        <th className='row-border column admin-container text-white'>Haber Açıklama</th>
                        <th className='row-border column admin-container text-white'>Haber Linki</th>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem ipsum dolor sit amet...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Ipsum Lorem </td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum amet sit dolor...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>LoremIpsum</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Lorem Ipsum Lorem Lorem Sit dolor amet...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Ipsum Dolor!</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Consectetur adipiscing elit...</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                      <tr className='padding-top-1'>
                        <td className='row-border padding-top-1 column cell-color text-white'>Amet Sit</td>
                        <td className='row-border padding-top-1 column cell-color text-white'>Morbi vulputate tempor mi</td>
                        <td className='row-border padding-top-1 column cell-color text-white'><a href="#"><i className='fa fa-external-link-alt text-white'></i></a></td>
                      </tr>
                  </table>
                </div>
        </div>
    </>
  );
}

export default Admin;