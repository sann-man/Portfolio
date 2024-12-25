import { FaGithub, FaLinkedin, FaYoutube, FaReact, FaGoogle, 
         FaCloud, FaCode, FaHtml5, FaCss3, FaPython, FaAws } from 'react-icons/fa';
import { IoMdDownload, IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from "react-icons/ri";

import { SiFlask } from "react-icons/si";
import './App.css';
import { FaA } from 'react-icons/fa6';
import logo from './assets/personal-logo.png'; 


const skillsData = [
  {
    name: 'React',
    icon: FaReact,
    percentage: 50,
    color: 'text-[#61DBFB]',
    textSize: 'text-3xl'
  },
  {
    name: 'JavaScript',
    icon: IoLogoJavascript,
    percentage: 60,
    color: 'text-yellow-500',
    textSize: 'text-2xl'
  },
  {
    name: 'HTML',
    icon: FaHtml5,
    percentage: 80,
    color: 'text-orange-500',
    textSize: 'text-3xl'
  },
  {
    name: 'Python',
    icon: FaPython,
    percentage: 50,
    color: 'text-yellow-300',
    textSize: 'text-3xl'
  },
  {
    name: 'CSS',
    icon: FaCss3,
    percentage: 80,
    color: 'text-blue-400',
    textSize: 'text-3xl'
  },
  {
    name: 'AWS',
    icon: FaAws,
    percentage: 50,
    color: 'text-white',
    textSize: 'text-2xl'
  }, 
  {
    name: 'Tailwind', 
    icon: RiTailwindCssFill, 
    percentage: 70, 
    color: 'text-blue-300', 
    textSize: 'text-2xl', 
  },
];

const SkillCard = ({ name, icon: Icon, percentage, color, textSize }) => (
  <div className="border-2 border-green-950 bg-[#3f3f3f] bg-opacity-30 p-4 rounded-lg">
    <div className="flex items-center">
      <h1 className={`${color} font-bold ${textSize}`}>{name}</h1>
      <span className={`${color} text-4xl ml-4`}><Icon /></span>
    </div>
    <div className="flex items-center">
      <div className="w-full bg-gray-500 rounded-full h-2.5 mt-2">
        <div 
          className="bg-green-500 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <h1 className="text-white font-bold ml-2">{percentage}%</h1>
    </div>
  </div>
);

function App() {
  return (
    <div className="w-full min-h-screen font-mono">
      {/* Nav bar */}
      <div id="nav-bar" className="bg-[#3f3f3f] bg-opacity-30 max-h-24">
          <ul className="text-white flex justify-between items-center h-24">
              <li className="font-bold text-xl text-green-500 ml-4 p-2 bg-black rounded-full">
                <img src={logo} alt="personal logo" className="w-16 h-16 rounded-full"/>
              </li>
            <div className="flex space-x-20 mr-4">
              <li className="text-green-500 text-lg border-2 border-green-950 bg-[#282828] p-2 font-bold rounded-lg min-w-20 text-center">Home</li>
              <li className="text-white text-lg border-2 border-green-950 bg-[#282828] p-2 font-bold rounded-lg text-center">Skills</li>
              <li className="text-white text-lg border-2 border-green-950 bg-[#282828] p-2 font-bold rounded-lg text-center">Portfolio</li>
              <li className="text-white text-lg border-2 border-green-950 bg-[#282828] p-2 font-bold rounded-lg text-center">Contact</li>
            </div>
          </ul>
      </div>

      {/* Main content */}
      <div id="main-content-container" className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 mt-16 w-full">
        <div id="header-main" className="w-3/4 max-w-3/4 items-center justify-center p-4 bg-[#3f3f3f] rounded-lg bg-opacity-30">
          <div id="header-container" className="max-h-[50vh] overflow-hidden flex flex-row bg-[#282828] rounded-lg p-5 shadow-2xl border-2 border-green-950">
            <div className="text-white flex flex-col">
              <h1 className="text-2xl">Hi i'm</h1>
              <h1 className="text-5xl text-green-200 font-extrabold">Rahsaan Young Jones</h1>
              <h1 className="text-3xl text-green-400 font-bold">Front-End Development | Cybersecurity</h1>
              <p className="font-bold3">I am a computer science graduate from UC Merced with experience building user-friendly front-end interfaces and 
                                          a focus on cybersecurity.</p>
              <button
                id="download-cv"
                className="flex justify-center w-1/2 content-center transfrom translate-x-1/2 border-4 text-xl ease-in duration-75
                         border-green-500 rounded-lg text-green-500 px-4 py-2 mt-24 hover:bg-green-500 hover:text-white"
              >
                <span className="flex items-center space-x-2">
                  <span>Download Resume</span>
                  <IoMdDownload />
                </span>
              </button>
            </div>
            
            <div className="relative left-36 -top-20 bg-[#121212] h-min rounded-full shadow-lg">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg" 
                className="w-[950px] rounded-full" 
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-8">
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

        {/* Skills Section */}
        <div className="w-2/3 mt-8 p-8 ">
          <h1 className="text-3xl text-white font-bold text-center mb-8">Skills</h1>
          <div className="grid grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;