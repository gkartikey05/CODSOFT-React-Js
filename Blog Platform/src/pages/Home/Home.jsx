import "./Home.css";

import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
