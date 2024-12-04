import React from 'react'; 
import './ListDirectory.css'; 

const ListDirectory = () => {
  return (
    <div className="contact-list"> 
      <table>
        <tbody>
          <tr>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user"></i>
              </div>
            </td>
            <div className="divContainer">
            <td><h1>James King</h1></td>
            <td><h2>President and CEO</h2></td>
            </div>
          
          </tr>
          <tr>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user"></i>
              </div>
            </td>
            <div className="divContainer">
            <td><h1>Julie Taylor</h1></td>
            <td><h2>VP of Marketing</h2></td>
            </div>

          </tr>
          <tr>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user"></i>
              </div>
            </td>
            <div className="divContainer">
            <td><h1>Eugene Lee</h1></td>
            <td><h2>CFO</h2></td>
            </div>
          </tr>
          <tr>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user"></i>
              </div>
            </td>
            <div className="divContainer">
            <td><h1>John Williams</h1></td>
            <td><h2>VP of Engineering</h2></td>
            </div>
          </tr>
          <tr>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user"></i>
              </div>
            </td>
            <div className="divContainer">
            <td><h1>Ray Moore</h1></td>
            <td><h2>VP of Sales</h2></td>
            </div>
          </tr>
          <tr>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user"></i>
              </div>
            </td>
            <div className="divContainer">
            <td><h1>Paul Jones</h1></td>
            <td><h2>QA Manager</h2></td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListDirectory
