import React,{useState} from "react";
import { useSelector } from "react-redux";
import TshirtList from "../Tshirts/TshirtList"
import {tshirtsData} from "../Tshirts/TshirtsData";
import Search from "../Tshirts/Search/Search";

const Dashboard = () => {
const [tshirtList, setTshirtList] = useState(tshirtsData);
const [searchteamName, setSearchteamName] = useState("")
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return <h1>Spinner.....</h1>;
  }
  return (
    <div>
       <Search 
    setSearchteamName={setSearchteamName}/>
        <TshirtList tshirtList={tshirtList}
        searchteamName={searchteamName}
        />
      
    </div>
  );
};

export default Dashboard;


