import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },       // Replace with your actual URLs
        { name: 'Twitter', icon: Twitter, url: 'https://x.com/kalwenzi' },         // Replace with your actual URLs
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/kalwenzi.carl/' },     // Replace with your actual URLs
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/stephenkalwenzi/' },       // Replace with your actual URLs
    ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
                {/* Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Kalwenzi. All rights reserved.
        </div>
         {/* Optional:  Email Link */}
{/*          <div className="mt-4 md:mt-0 text-center md:text-right">
            <a
              href="mailto:hello@example.com"  // Replace with your email
              className="text-gray-400 hover:text-white hover:underline"
            >
              hello@example.com
            </a>
          </div> */}
      </div>
    </footer>
  );
};

export default Footer;