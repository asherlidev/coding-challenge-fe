import bnbIcon from "../Home/images/icons/bnb.png";
import arrowIcon from "../Home/images/icons/arrow.png";
import twoIcon from "../Home/images/icons/2.png";
import qrcodeIcon from "../Home/images/icons/qrcode.png";
import copyIcon from "../Home/images/icons/copy.png";

export default function Transfer() {
  return (
    <div className="col-xl-4 px-2">
      <div className="main-card p-30 w-100 h-100">
        <div className="pb-2">
          <div className="color-gray font-18 main-medium mb-3">Buy</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={bnbIcon}
                alt="main-coin"
                width="36px"
                height="36px"
              />
              <div className="color-black font-18 main-semibold ml-3">BNB</div>
            </div>
            <div>
              <img src={arrowIcon} alt="arrow-img" />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="color-gray font-18 main-medium mb-3">Pay With</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={twoIcon}
                alt="main-coin"
                width="36px"
                height="36px"
              />
              <div className="color-black font-18 main-semibold ml-3">$SLM</div>
            </div>
            <div>
              <img src={arrowIcon} alt="arrow-img" />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-5">
          <button className="main-big_button bg-blue main-border_green color-white font-18 main-semibold" data-target="#qrcode-body" data-toggle="collapse">
            Send
          </button>
          <div class="collapse" id="qrcode-body">
            <div className="">
              <div className="main-card p-30 w-100 d-flex flex-column align-items-center">
                <img src={qrcodeIcon} alt="qrcode-img" />
                <div className="d-flex mt-5">
                  <p className="wallet-address_text font-18 main-medium color-black">A93A872ad2730xC7c...</p>
                  <img src={copyIcon} alt="copy-icon" width="20px" height="20px" className="copy-icon" />
                </div>
              </div>
            </div>
          </div>
          <button className="main-big_button bg-white main-border_green color-blue font-18 main-semibold">
            Receive
          </button>
        </div>
      </div>
    </div>
  );
}
