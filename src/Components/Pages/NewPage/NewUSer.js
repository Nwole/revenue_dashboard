import './newUser.css';

const NewUSer = () => {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className='newUserItem'>
          <label>Fullname</label>
          <input type="text" placeholder="john smith" />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type="text" placeholder="+ 123 7766 005" />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type="text" placeholder="New Yourk | USA" />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
          <input type="radio" name="gender" id='male' value="male"/>
          <labe for="male">Male</labe>
          <input type="radio" name="gender" id='fmale' value="fmale"/>
          <labe for="female">Female</labe>
          <input type="radio" name="gender" id='other' value="other"/>
          <labe for="other">Other</labe>
          </div>
        </div>
        <div className='newUseritem'>
          <label>Active</label>
          <select className='newUserSelect' name="active" id='active'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        </form>
        <div className='newUserButton'>Create</div>
    </div>
  );
};

export default NewUSer;
