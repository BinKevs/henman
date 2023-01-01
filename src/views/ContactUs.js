import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";
function ContactUs() {
  return (
    <>
      <div className="bg-black md:mt-[88px] mt-[82px]">
        <div class="container  px-6  mx-auto">
          <section class=" text-gray-800 text-center">
            <div class="px-6 py-12 md:px-12 ">
              <div class="container mx-auto xl:px-32 border-2">
                <div class="grid lg:grid-cols-2 flex items-center">
                  <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0 ">
                    <div class="block rounded-lg shadow-lg  py-12 px-12 p-8 border-2 mr-4 border-black bg-white">
                      <h2 class="text-3xl font-bold mb-12">Contact us</h2>
                      <form>
                        <div class="form-group mb-6">
                          <input
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group mb-6">
                          <input
                            type="email"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Email address"
                          />
                        </div>
                        <div class="form-group mb-6">
                          <textarea
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div class="form-group form-check text-center mb-6">
                          <input
                            type="checkbox"
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck87"
                            checked
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="exampleCheck87"
                          >
                            Send me a copy of this message
                          </label>
                        </div>
                        <button
                          type="submit"
                          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="md:mb-12 lg:mb-0 p-8 border-2 border-black shadow-lg rounded-lg">
                    <div class="h-[700px] relative shadow-lg rounded-lg ">
                      <iframe
                        src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        class="left-0 top-0 h-full w-full absolute rounded-lg"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
