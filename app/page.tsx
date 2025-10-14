import "./styles/homepage.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div
        className="homepage"
        style={{
          backgroundImage: `url('Asset/Homepage/mainbg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="homepage-container ">
          <img
            src="Asset/Homepage/maintitle.svg"
            alt="main-title"
            className="img-title"
          />
          <div className="infobutton button-decor">
            <Link href="/About" className="button-info">
            WHAT'S UC CHAMPION?
            </Link>
          </div>
          <div className="videobg">
            <img src="Asset/Homepage/videobg.svg" alt="videobg" className="videoframe"/>
          </div>
        </div>
      </div>
    </>
  );
}
