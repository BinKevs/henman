import { Link } from "react-router-dom";
import hotAugustBook from "../assets/hotAugustBook.jpeg";
import safetyBookWtGrass from "../assets/safetyWtGrass.jpeg";
import prettyPleaseWtGrass from "../assets/prettyPleaseWtGrass.jpeg";
import { IconContext } from "react-icons";
import { AiOutlineRight, AiOutlineAmazon } from "react-icons/ai";
function Order() {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-[80%] m-auto pt-[80px]">
          <div className="">
            <div className="flex relative ">
              <div className="w-[50%] bg-[3D8FAA] text-center text-5xl font-semibold my-auto ">
                <div className="text-3xl text-center font-normal text-gray-500 absolute top-1 left-1">
                  Grab Your Copy Now{" "}
                </div>
                "Who's Really Driving Your Bus"
              </div>
              <div className="w-[50%]">
                {" "}
                <img
                  className=" h-[200px] w-[100%] object-cover"
                  src="https://www.wallpaperflare.com/static/772/242/451/bulli-volkswagen-auto-model-car-wallpaper.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center space-x-16 pt-[32px]">
              <div>
                <div class="min-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                      Kindle
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight">
                      $2.99
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 256 pages</div>
                      <div>Language: English </div>
                      <div>ISBN-10 : 164753724X</div>
                      <div>ISBN-13 : 978-1647537241</div>
                    </div>
                    <a
                      href="https://www.amazon.com/Whos-Really-Driving-Your-Bus-ebook/dp/B0791M84PR/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
                      target="_blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                      rel="noreferrer"
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="min-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                      Hardcover
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight">
                      $15.99
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 48 pages</div>
                      <div>Language: English </div>
                      <div>ISBN-10 : 164753724X</div>
                      <div>ISBN-13 : 978-1647537241</div>
                    </div>
                    <a
                      href="https://www.amazon.com/Around-World-Lines-James-Anstead/dp/164753724X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                      target="_blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                      rel="noreferrer"
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
