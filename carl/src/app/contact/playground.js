import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Install lucide-react  (npm install lucide-react)

// Option 1: Simple Copyright Notice
const Footer1 = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

// Option 2: Copyright Notice with Social Links
const Footer2 = () => {
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },       // Replace with your actual URLs
        { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },         // Replace with your actual URLs
        { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },     // Replace with your actual URLs
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },       // Replace with your actual URLs
    ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
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
         {/* Optional:  Email Link */}
         <div className="mt-4 md:mt-0 text-center md:text-right">
            <a
              href="mailto:hello@example.com"  // Replace with your email
              className="text-gray-400 hover:text-white hover:underline"
            >
              hello@example.com
            </a>
          </div>
      </div>
    </footer>
  );
};

// --- Footer Component ---


export default Footer;

