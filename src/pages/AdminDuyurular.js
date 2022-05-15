import React from "react";
import "../components/admin/AdminDuyurular.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
const AdminDuyurular = () => {
  const [visible, setVisible] = React.useState(false);
  const [avisible, asetVisible] = React.useState(false);
  const [evisible, esetVisible] = React.useState(false);
  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <style>{`

        .element-visible { display: block }
        .element-hidden { display: none }

    `}</style>
      <div className="admin-nav">
        <a href="#" className="admin-menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </a>
        <h3 className="title admin-nav-margin-left">İSTANBUL UNIVERSITESI - CERRAHPAŞA</h3>
      </div>
      <div>
        <nav className={sidebar ? "admin-nav-menu active" : "admin-nav-menu"}>
          <ul className="admin-nav-menu-items admin-nav-margin-top" onClick={showSidebar}>
            <li className="admin-navbar-toggle">
              <a href="#" className="admin-menu-bars">
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

      <h1 className="padding-top-2">DUYURULAR</h1>
      <div>
        <button
          className="myButton"
          onClick={function (event) {
            setVisible(true);
            asetVisible(false);
            esetVisible(false);
          }}
        >
          Ekle
        </button>
        <button
          className="myButton"
          onClick={function (event) {
            setVisible(false);
            asetVisible(true);
            esetVisible(false);
          }}
        >
          Düzenle
        </button>
        <button
          className="myButton"
          onClick={function (event) {
            setVisible(false);
            asetVisible(false);
            esetVisible(true);
          }}
        >
          Sil
        </button>
      </div>
      <form>
        <div
          id="duyuruEkle"
          className={visible ? "element-visible" : "element-hidden"}
        >
          <label>
            Duyuru Adı:
            <input type="text" name="name" />
          </label>
          <label className="margin-left-1">
            Duyuru:
            <input type="text" name="name" />
          </label>
          <input className="myButton" type="submit" value="Gönder" />
        </div>

        <div
          id="duyuruDüzenle"
          className={avisible ? "element-visible" : "element-hidden"}
        >
          <label className="margin-left-1">
            Duyuru No:
            <input type="text" name="name" />
          </label>
          <label className="margin-left-1">
            Duyuru Adı:
            <input type="text" name="name" />
          </label>
          <label className="margin-left-1">
            Duyuru:
            <input type="text" name="name" />
          </label>
          <input className="myButton" type="submit" value="Gönder" />
        </div>

        <div
          id="duyuruSil"
          className={evisible ? "element-visible" : "element-hidden"}
        >
          <label className="margin-left-1">
            Duyuru No:
            <input type="text" name="name" />
            <input type="submit" value="Gönder" />
          </label>
        </div>
      </form>
      <div className=" toggle container-fluid pt-4 px-4">
        <div>
          <h2 className="padding-top-2 justify-to-left">
            <b>Tüm Duyurular</b>
          </h2>
          <table className="row ">
            <tr>
              <th className="column-4 container text-white">Duyuru No</th>
              <th className="column-4 container text-white">Duyuru Başlık</th>
              <th className="column-4 container text-white">Duyuru Açıklama</th>
              <th className="column-4 container text-white">Duyuru Linki</th>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                1
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem ipsum dolor sit amet...
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                2
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                LoremIpsum
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum Lorem Lorem Sit Dolor
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                3
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Ipsum Dolor!
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Consectetur adipiscing elit...
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                4
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Amet Sit
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Morbi vulputate tempor mi
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                5
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Ipsum Lorem
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum amet sit dolor...
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>

            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                6
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem ipsum dolor sit amet...
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                7
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Ipsum Lorem{" "}
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum amet sit dolor...
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                8
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                LoremIpsum
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum Lorem Lorem Sit Dolor
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                9
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Ipsum Dolor!
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Consectetur adipiscing elit...
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                10
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Amet Sit
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Morbi vulputate tempor mi
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                11
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Ipsum Lorem{" "}
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum amet sit dolor...
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
            <tr className="padding-top-1">
              <td className="padding-top-1 column-4 cell-color text-white">
                12
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                LoremIpsum
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                Lorem Ipsum Lorem Lorem Sit dolor
              </td>
              <td className="padding-top-1 column-4 cell-color text-white">
                <a href="#">
                  <i className="fa fa-external-link-alt text-white"></i>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default AdminDuyurular;
