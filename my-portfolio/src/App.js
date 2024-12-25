import logo from './logo.svg';
import { FaGithub, FaLinkedin, FaYoutube, FaReact, FaGoogle, FaCloud} from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen font-mono">
      {/* Nav bar */}
      <div id="nav-bar" className=" bg-[#3f3f3f] bg-opacity-30">
          <ul className="text-white flex justify-between items-center p-6">
            <li className="font-bold text-xl text-green-500">Rahsaan</li>
            <div className="flex space-x-20">
              <li className="text-white text-lg border-2 border-gray-700 bg-[#282828] p-2 font-bold rounded-lg min-w-20 text-center">Home</li>
              <li className="text-white text-lg border-2 border-gray-700 bg-[#282828] p-2 font-bold rounded-lg text-center">Experience</li>
              <li className="text-white text-lg border-2 border-gray-700 bg-[#282828] p-2 font-bold rounded-lg text-center">Portfolio</li>
              <li className="text-white text-lg border-2 border-gray-700 bg-[#282828] p-2 font-bold rounded-lg text-center">Contact</li>
            </div>
          </ul>
        </div>

      {/* Main content */}
      <div id = "main-content-container" className = " flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 mt-16 w-full">
        <div id="header-main" className=" w-3/4 max-w-3/4  items-center justify-center p-4 
                              bg-[#3f3f3f] rounded-lg  bg-opacity-30 ">
          <div id = "header-container" className = " max-h-[50vh] overflow-hidden flex flex-row bg-[#282828] rounded-lg p-5 shadow-2xl border-2 border-gray-700">
            <div className = "text-white">
              <h1 className = "text-2xl">Hi i'm</h1>
              <h1 className = "text-5xl text-green-200 font-extrabold">Rahsaan Young Jones</h1>
              <h1 className = "text-3xl text-green-400 font-bold" >Front-End Development | Cybersecurity</h1>
              <p className = "font-bold3">I am a computer science graduate from UC Merced with experience building user-friendly front-end interfaces and 
                                          a focus on cybersecurity. </p>
            </div>
            <div className = "relative left-36 -top-20 bg-[#121212] h-min rounded-full shadow-lg">
              <img id = "" src = "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg" 
                className = " w-[950px] rounded-full" ></img>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-8">
            <button
              id="download-cv"
              className="border-2 border-green-500 rounded-lg text-green-500 px-4 py-2 hover:bg-green-500 hover:text-white"
            >
              <span className="flex items-center space-x-2">
                <span>Download Resume</span>
                <IoMdDownload />
              </span>
            </button>
            <a
              href=""
              className="text-white text-4xl hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href=""
              className="text-white text-4xl hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href=""
              className="text-white text-4xl text-red hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Expereince section */}
        <h1 className = "text-center font-bold text-white text-5xl mt-8">Skills & Certificates</h1>

        <div className = " w-11/12 ">
          <div className = "bg-[#3f3f3f] rounded-lg m-10 bg-opacity-30 p-4 mt-16 flex justify-between">
          {/* react */}
            <div className = "bg-[#282828] p-7 rounded-lg border-gray-700 border-2 shadow-2xl h-full">
                <div className = "flex text-center items-center">
                  <h1 className = "text-[#61DBFB] font-extrabold text-3xl">React</h1>
                  <span className = "text-[#61DBFB] text-5xl ml-4">
                    <FaReact/>
                  </span>
                </div>
                <div id = "react-port-content" className = "mt-4 flex">
                    <div className = "w-1/3">
                      <h1 className = "text-white font-bold text-xl">Stat Wizard</h1>
                      <img id = "" src = "" className = "border-2 border-gray-100 w-44 h-44"></img>
                    </div>
                    <div className = "ml-3">
                      <h1 className = "text-white font-bold text-xl">PC Pricer</h1>
                      <img id = "" src = "" className = "border-2 border-gray-100 w-44 h-44"></img>
                    </div>
                    <div className = "ml-3">
                      <h1 className = "text-white font-bold text-xl">Dine Board</h1>
                      <img id = "" src = "" className = "border-2 border-gray-100 w-44 h-44"></img>
                    </div>
                </div>
            </div>

            {/* cyber sec */}
            <div className = "bg-[#282828] p-7 rounded-lg border-gray-700 border-2 shadow-2xl h-full">
                <div className = "flex text-center items-center">
                  <h1 className = "text-white font-extrabold text-3xl">
                    <span className = "text-blue-500">Google</span> 
                    <span className = "ml-4 text-red-500">Cybersecurity</span> 
                    <span className = "ml-4 text-yellow-500">Certificate</span>
                    </h1>
                  <span className = "text-green-500 text-5xl ml-4">
                    <FaGoogle/>
                  </span>
                </div>
            </div>

            {/* Networks */}

            <div className = "bg-[#282828] p-7 rounded-lg border-gray-700 border-2 shadow-2xl  h-full ">
                <div className = "flex justify-center text-center items-center">
                  <h1 className = "text-white font-extrabold text-3xl">Networking</h1>
                  <span className = "text-white text-5xl ml-4">
                    <FaCloud/>
                  </span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
