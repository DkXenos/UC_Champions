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
            <img
              src="Asset/Homepage/videobg.svg"
              alt="videobg"
              className="videoframe"
            />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TXo3j1jmKlQ?si=fnflcHY8HbpbesEO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video"
            ></iframe>
          </div>
          
          <div className="bottomline">
            <img src="Asset/Homepage/startline.svg" alt="" />
          </div>
        </div>
        {/* <img
            src="Asset/Homepage/leftdecor.svg"
            alt=""
            className="leftdecor"
          /> */}
      </div>
    </>
  );
}
