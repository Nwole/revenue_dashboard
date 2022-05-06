import "./user.css";
import PublishIcon from '@mui/icons-material/Publish';
import pic from "./../../../images/face3.jpg";
import pic1 from "./../../../images/face1.jpg"
import {Link}from "react-router-dom"
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3 className="userTitle">Edit</h3>
        <Link to="newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={pic} alt="gee" className="userShowImg" />
          </div>

          <div className="usershowTopTitle">
            <span className="userShowUsername">Anna Becker</span>
            <span className="userShowUserTitle">Software Engineer</span>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              
            <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="annabecker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+123 77 553 11"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateright">
                <div className="userUpdateUpload">
                    <img className="userUpdateImg"src={pic1} alt="gee" />
                    <label htmlFor="file"><PublishIcon className="userUpdateIcon " /></label>
                    <input type="file" id="file" style={{display: "none"}} />
                </div>
                <div className="userUdateButtom">Update</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
