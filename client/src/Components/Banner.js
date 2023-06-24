import React from "react";
import artist from "../img/artist.jpg";
import { FaEllipsisH,} from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />
      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/ Discover</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
      <div className="bottom"></div>
      </div>
      </div>
  );
}

export { Banner };
