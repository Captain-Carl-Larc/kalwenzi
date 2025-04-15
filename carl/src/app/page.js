import Link from 'next/link'
import Image from 'next/image';


export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "The Grand Estate",
      description: "A luxurious residential development featuring 12 bespoke homes, each with...",
      location: "Upper Macungie Township, PA",
      features: ["Upscale Amenities", "Private Access", "Luxury Finishes"],
      imageSrc: "/assets/hero.jpeg", // Using the provided image path
    },
    {
      id: 2,
      title: "The Business Hub",
      description: "A state-of-the-art commercial office space designed to meet the needs of modern...",
      location: "Downtown Philadelphia, PA",
      features: ["High-Speed Internet", "On-site Restaurant", "Conference Rooms"],
      imageSrc: "/assets/hero.jpeg", // Using the provided image path
    },
    {
      id: 3,
      title: "The Village",
      description: "A community development featuring a mix of residential and commercial spaces, designed...",
      location: "Green Valley, CA",
      features: ["Green Spaces", "Family-Friendly Amenities", "Pet-Friendly"],
      imageSrc: "/assets/hero.jpeg", // Using the provided image path
    },
  ];
  return(
    <div>
      <section className='bg-red-500 sm:grid sm:grid-cols-2 sm:items-center
'>
      <div id="img-cont" className='bg-yellow-500'>
      <Image src="/assets/hero.jpeg" width={500} height={500} alt="Your alt text"  className="w-full h-auto" />
        </div>
        <div id='text-cont' className='bg-green-500 sm:p-6'>
          <div id="heading">
            <h1 className="text-4xl font-bold text-center">
              Solving problems using AI and programming.One problem at a time.
            </h1>
          </div>
          <div id="paragraph" className='sm:p-6'>
            <p>
              I use my programming and problem solving skills to solve everyday problems by coming up with cost effective and evnironment friendly solutions.
            </p>
          </div>
          <div id="buttons-cont">
            <button className='bg-blue-500 px-4 py-2'>
              Get in Touch
            </button>
            <button className='bg-blue-500 px-4 py-2'>
              View my Projects
            </button>
          </div>
        </div>
      </section>
    <section className="bg-orange-500 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-5xl font-bold text-white mb-6">
          We're <span className="text-black bg-white px-3 py-1 rounded-md">building</span> communities.
        </h2>

        {/* Subheading */}
        <p className="text-lg text-white opacity-80 mb-8">
          With a commitment to excellence and a focus on innovation, we've established ourselves as a
          leader in the real estate and construction industry.
        </p>

        {/* Button */}
        <button className="bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          Learn More About Us...
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
                We've built a reputation for delivering exceptional results and exceeding our clients' expectations.
                From luxurious residential homes to state-of-the-art commercial properties, our team of experts is
                dedicated to bringing your vision to life.
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
                  <div className="flex items-center text-gray-500 text-xs mb-2">
                    <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 6a7 7 0 0 1 14 0c0 4.87-7 14-7 14zm0-16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
                    {project.location}
                  </div>
                  {project.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature) => (
                        <span key={feature} className="bg-gray-800 text-gray-400 rounded-full px-2 py-1 text-xs">{feature}</span>
                      ))}
                    </div>
                  )}
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full">
                    View Property
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Bottom Left)  to be added later*/}
        </div>
    </section>
    </div>
  )
}
