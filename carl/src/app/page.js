import Link from 'next/link'
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
//import { PhoneIcon, MailIcon, MapPinIcon } from '@heroicons/react/24/outline';


export default function Home() {
  
  
  const skillsData1 = [
    { name: 'JavaScript', icon: CheckCircleIcon },
    { name: 'React', icon: CheckCircleIcon },
    { name: 'Next.js', icon: CheckCircleIcon },
    { name: 'Tailwind CSS', icon: CheckCircleIcon },
    { name: 'HTML', icon: CheckCircleIcon },
    { name: 'CSS', icon: CheckCircleIcon },
    { name: 'UI/UX Design', icon: CheckCircleIcon },
    { name: 'Figma', icon: CheckCircleIcon },
    { name: 'Git', icon: CheckCircleIcon },
  ];
  
 
  const featuredProjects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A dynamic and responsive portfolio website built to showcase my skills, projects, and experience as a developer.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      liveDemo: "https://your-portfolio-url.com", // Replace with your actual link
      githubRepo: "https://github.com/your-username/your-portfolio-repo", // Replace with your actual link
      imageSrc: "/assets/hero.jpeg", // Add a relevant screenshot
    },
    {
      id: 2,
      title: "Research Link Saver Chrome Extension",
      description: "A Chrome extension designed to streamline research by allowing users to quickly save links to their local storage for later access.",
      technologies: ["JavaScript", "Chrome Storage API", "HTML", "CSS"],
      // No live demo for extensions in the same way, but you could link to a blog post or explanation
      // liveDemo: "...",
      githubRepo: "https://github.com/your-username/chrome-extension-repo", // Replace with your actual link
      imageSrc: "/assets/hero.jpeg", // Add your extension's icon or a screenshot
    },
    {
      id: 3,
      title: "SME Business Intelligence Dashboard",
      description: "A comprehensive dashboard application providing Small and Medium-sized Enterprises with key performance indicators and data visualization for informed decision-making.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Data Visualization Library "],
      // Replace with a demo link if you have one (could be a video or a limited access demo)
      // liveDemo: "https://sme-dashboard-demo.com",
      githubRepo: "https://github.com/your-username/sme-dashboard-repo", // Replace with your actual link (if applicable)
      imageSrc: "/assets/hero.jpeg", // Add a relevant screenshot
    },
  ];

  const SkillItem = ({ skill }) => {
    const Icon = skill.icon || CheckCircleIcon; // Default to CheckCircleIcon if no icon provided
    return (
      <div className="flex items-center text-black">
        <Icon className="h-5 w-5 mr-2 text-gray-950 font-semibold" />
        <span>{skill.name}</span>
      </div>
    );
  };
  return(
    <div>  
    <section className="bg-black py-16 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Text Content */}
        <div className="text-white text-left sm:text-center lg:text-left">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Using Tech to solve<br className="hidden sm:block" /> Problems, One <span className="text-orange-500">solution</span> at a Time
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            I am committed to delivering cost-effective, high quality solutions with AI intergration as needed. From simple SMEs tools, personal websites to corporate softwares, I am dedicated to bringing your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4 pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2  sm:py-3 px-4 sm:px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer">
              Schedule a Call
            </button>
            <button className="bg-transparent border border-gray-600 text-white font-semibold py-2  sm:py-3 px-4 sm:px-8  rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer">
              View my Projects
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative aspect-w-9 aspect-h-16 lg:aspect-none lg:h-[600px]">
          <Image
            src={featuredProjects[0].imageSrc}// Replace with your actual building image path
            alt="Modern Building"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      {/* Subtle Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
    </section>
    <section className="bg-orange-500 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-5xl font-bold text-white mb-6">
          I am <span className="text-black bg-white px-3 py-1 rounded-md">revolutionizing</span> Tech solutions.
        </h2>

        {/* Subheading */}
        <p className="text-lg text-white opacity-80 mb-8">
          My approach is simple. I undertand the problem and then write the most efficient code to solve it. I write readable, clean code.
        </p>

        {/* Button */}
        <button className="bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 cursor-pointer">
          Learn More about me
        </button>
      </div>

      {/* Decorative Images (Adjust positioning and sizes as needed) */}


      {/* Gradient Overlay (Optional - to create a subtle visual effect at the bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-orange-500 to-transparent"></div>
    </section>
      <section className="bg-black py-16" id='projects-section'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12 flex md:flex-row flex-col md:justify-between md:items-center gap-x-16 gap-y-4  ">
            <div className='md:w-4/5'>
              <h2 className="text-3xl font-bold text-orange-500 mb-2">
                <span className="text-white mr-2"></span>Featured Projects
              </h2>
              <p className="text-gray-400 text-sm">
              As a digital architect, I craft robust and scalable solutions, consistently exceeding expectations. From intuitive user interfaces to complex backend systems, I transform visions into high-performing realities.
              </p>
            </div>
            <button className="bg-transparent border border-gray-600 text-white rounded-md px-2 md:px-4 py-1 md:py-2 text-sm w-32 md:w-1/5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
              View all projects
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-800 text-gray-400 rounded-full px-2 py-1 text-xs">{tech}</span>
                    ))}
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md text-center">
                      Live Demo
                    </a>
                  )}
                  {project.githubRepo && (
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md text-center">
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* Pagination (Bottom Left)  to be added later*/}
        </div>
    </section>
    <section className=" py-20 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">My Skills & Expertise</h2>

        {/* Choose ONE of the following options (Option 1, 2, or 3) */}

        {/* Option 1: Simple List with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {skillsData1.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Description */}
          <div className="text-gray-300">
            <p className="mb-4">
              {`I'm always open to new projects, collaborations, or just a friendly chat. Feel free to reach out through the form below, and I'll get back to you as soon as possible.`}
            </p>
          </div>
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}
