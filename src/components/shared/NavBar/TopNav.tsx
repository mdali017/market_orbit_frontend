import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";

const TopNav = () => {
  const socialItems = [
    {
      id: 1,
      name: "Facebook",
      url: "https://facebook.com",
      icon: <FaFacebook />,
    },
    { id: 2, name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    {
      id: 3,
      name: "Instagram",
      url: "https://instagram.com",
      icon: <FaInstagram />,
    },
    {
      id: 4,
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
    { id: 5, name: "YouTube", url: "https://youtube.com", icon: <FaYoutube /> },
  ];

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4">
        {/* Marquee Text Section */}
        <div className="w-full md:w-3/4">
          <Marquee speed={30} gradient={false}>
            <p className="text-lg md:text-xl font-semibold text-center md:text-left">
              Stay connected with us for the latest updates, trends, and
              exclusive offers! Follow us on our social channels.
            </p>
          </Marquee>
        </div>

        {/* Social Icons Section */}
        <div className="flex mt-4 md:mt-0 space-x-6 text-2xl justify-center md:justify-end w-full md:w-1/4">
          {socialItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
