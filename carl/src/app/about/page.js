import Link from 'next/link'


function About() {
    return ( 
        <div>
            <h1 className="text-4xl">
                About page
            </h1>
            <Link href='/'>
                Home
            </Link>
        </div>

     );
}

export default About;