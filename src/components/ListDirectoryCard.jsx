import React from 'react'; 
import './ListDirectoryCard.css'; 

const ListDirectoryCard = () => {
  return (
    <div className="contact-list"> 
      <table>
        <tbody>
          <tr>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user fa-user-employee"></i>
              </div>
            </td>
            <div className="divContainer">
            <td><h1>Luis Aguilera</h1></td>
            <td><h2>Full Stack Engineer</h2></td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListDirectoryCard;
