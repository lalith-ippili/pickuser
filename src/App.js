import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./App.css";

const usersdata = [
    {

        name: "kumar",
        email: "kumar@gmail.com",
        profileImage: "https://i.pinimg.com/564x/6c/83/d2/6c83d23fc0ee985d538a18ea7de92a8f.jpg",
    },
    {

        name: "lalith",
        email: "lalith@gmail.com",
        profileImage: "https://i.pinimg.com/736x/f7/ef/37/f7ef37a09af12e4547b5ec4d1013eb50.jpg",
    },
    {

        name: "nari",
        email: "nari@gmail.com.com",
        profileImage: "https://i.pinimg.com/564x/97/c0/dc/97c0dcaaef5334a51d386ed232c67f21.jpg",
    },
    {

        name: "ravi",
        email: "ravi@gmail.com.com",
        profileImage: "https://i.pinimg.com/564x/f0/86/fa/f086fabd15a5ead019bbab07a409c794.jpg",
    },
    {

        name: "sanji",
        email: "sanji@gmail.com.com",
        profileImage: "https://i.pinimg.com/564x/7e/63/3b/7e633b38fc915114e559b2e2275961ef.jpg",
    },
    {

        name: "shavani",
        email: "shavani@gmail.com",
        profileImage: "https://i.pinimg.com/736x/8b/71/0e/8b710ee37ae9f60acb2ba8d57e08622d.jpg",
    },
    {

        name: "satya",
        email: "satya@gmail.com",
        profileImage: "https://i.pinimg.com/736x/84/a4/25/84a425894d0bbb6cefa07441dc8fedcb.jpg",
    },
    {

        name: "srihari",
        email: "srihari@gmail.com",
        profileImage: "https://i.pinimg.com/564x/bc/84/ee/bc84ee79de0b3cdd29a40d1cc37313b4.jpg",
    },
    {

        name: "mahesh",
        email: "mahesh@gmail.com",
        profileImage: "https://i.pinimg.com/564x/97/c0/dc/97c0dcaaef5334a51d386ed232c67f21.jpg",
    },
];

function App() {

  const [search, setSearch] = useState("");
  const [mouse, setMouse] = useState(false);
  const [user, setUser] = useState([]);


  const HandleInput = (e) => {
      setSearch(e.target.value);
  };

  const DisplayHandler = () => {
      setMouse(!mouse);
  };

  const AddUserObject = (each) => {
      setUser([...user, each]);
      const updatedUsers = usersdata.filter((user) => user !== each);
      usersdata.splice(0, usersdata.length, ...updatedUsers);
  };

  const Deleteuserobject = (each) => {
      const updatedUsers = user.filter((eachUser) => eachUser !== each);
      setUser(updatedUsers);

      usersdata.push(each);
  };

  const UsersdataDisplay = () => {
      let getData = usersdata;
      const searchFilter = getData.filter((each) =>
          each.name.toLowerCase().includes(search.toLowerCase())
      );
      return (
          <div>
              {searchFilter.map((each, i) => (
                  <div key={i} onClick={() => AddUserObject(each)} className="filter-users">
                      <img src={each.profileImage} alt="" className="pickuser-images" />
                      <p className="filter-user-name">{each.name}</p>
                      <p>{each.email}</p>
                  </div>
              ))}
          </div>
      );
  };

  return (
   
     <>

<div className="total-pickuser-div" onMouseLeave={DisplayHandler}>
            <h1>Pick Users</h1>
            <div className="Searchbaradd-div">
                <div className="each-user-data-div">
                    {user.map((each, i) => (
                        <div key={i} className="each-user-data">
                            <img src={each.profileImage} alt="" className="pickuser-images" />
                            <p>{each.name}</p>
                            <span onClick={() => Deleteuserobject(each)}><RxCross2 /></span>
                        </div>
                    ))}
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="ADD NEW USER"
                        onChange={HandleInput}
                        value={search}
                        onMouseOver={DisplayHandler}
                    />
                </form>
            </div>
            <div>
                {mouse ? <div className="users-data-div">{UsersdataDisplay()}</div> : null}
            </div>
        </div>
     </>
    
  );
}

export default App;
