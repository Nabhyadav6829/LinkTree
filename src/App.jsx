import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, Sun, Moon, Copy, Check, ExternalLink } from 'lucide-react';
import image from './assets/profile.png'; // Ensure you have a profile image in the specified path

const LinkTree = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(null);

  const profileData = {
    name: "Nabh Yadav",
    bio: "Full Stack Web Developer",
    avatar: image, // ✅ Imported image used here
    links: [
      {
        title: "Portfolio",
        url: "https://github.com/Nabhyadav6829/portfolio",
        icon: <Globe className="w-5 h-5" />,
        description: (
          <div className="flex items-center space-x-2">
            <span>Portfolio Source Code</span>
            <button
              onClick={() => copyToClipboard("https://nabh-yadav-portfolio.vercel.app/", 0)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              title="Copy link"
            >
              <Copy className="w-4 h-4" />
            </button>
            <a
              href="https://nabh-yadav-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              title="Visit link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )
      },
      {
        title: "GitHub",
        url: "https://github.com/Nabhyadav6829",
        icon: <Github className="w-5 h-5" />,
        description: "See My Projects and Code Repositories"
      },
      {
        title: "LinkedIn Profile",
        url: "https://www.linkedin.com/in/nabh-yadav-aaa82a295/",
        icon: <Linkedin className="w-5 h-5" />,
        description: "Professional network"
      },
      {
        title: "Ride_Ease",
        url: "https://github.com/Nabhyadav6829/ride-ease",
        icon: <Globe className="w-5 h-5" />,
        description: (
          <div className="flex items-center space-x-2">
            <span>Ride_Ease Source Code</span>
            <button
              onClick={() => copyToClipboard("https://ride-ease-six.vercel.app/", 3)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              title="Copy link"
            >
              <Copy className="w-4 h-4" />
            </button>
            <a
              href="https://ride-ease-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              title="Visit link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )
      },
      {
        title: "Baskito",
        url: "https://github.com/Nabhyadav6829/Baskito",
        icon: <Globe className="w-5 h-5" />,
        description: "Food Delivery App With Smart Cart Options"
      },
      {
        title: "Email Me",
        url: "mailto:nabhyadav6829@gmail.com",
        icon: <Mail className="w-5 h-5" />,
        description: "Let's connect & collaborate"
      }
    ]
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const copyToClipboard = async (url, index) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(index);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 p-4 ${
      isDarkMode ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${isDarkMode ? '%23ffffff' : '%23000000'}' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 ${
            isDarkMode 
              ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' 
              : 'bg-white text-black hover:bg-gray-100 border border-gray-200 shadow-md'
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="max-w-lg mx-auto relative">
        {/* Profile Section */}
        <div className="text-center mb-10 pt-8">
          <div className="relative inline-block mb-6">
            <img
              src={profileData.avatar}
              alt="Profile"
              className={`w-36 h-36 rounded-full mx-auto border-4 transition-all duration-300 ${
                isDarkMode ? 'border-gray-700 shadow-2xl' : 'border-white shadow-xl'
              }`}
            />
            <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-4 ${
              isDarkMode ? 'bg-green-500 border-black' : 'bg-green-500 border-white'
            }`}></div>
          </div>
          
          <h1 className={`text-4xl font-bold mb-3 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {profileData.name}
          </h1>
          <p className={`text-xl mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {profileData.bio}
          </p>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-10">
          {profileData.links.map((link, index) => (
            <div
              key={index}
              className={`group flex items-center rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode 
                  ? 'bg-gray-900 border-gray-800 hover:bg-gray-800 hover:border-gray-700 shadow-lg hover:shadow-2xl' 
                  : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-md hover:shadow-xl'
              }`}
            >
              <div className={`flex-1 p-8 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {link.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {link.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 border-l-2 transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800' 
                      : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  title="Visit link"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => copyToClipboard(link.url, index)}
                  className={`p-6 border-l-2 transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800' 
                      : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  title="Copy link"
                >
                  {copiedLink === index ? (
                    <div className="flex flex-col items-center space-y-1">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-xs text-green-500">Copied!</span>
                    </div>
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl border-2 transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-900 border-gray-800' 
            : 'bg-white border-gray-200 shadow-md'
        }`}>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>50+</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Projects</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2K+</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connections</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>100%</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Passion</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-8">
          <p className={`text-sm transition-colors duration-300 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            © 2024 • Made with ❤️ using React & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
