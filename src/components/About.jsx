import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='card about'>
            <h1>About</h1>
            <p>This is a react application to showcase beginner features</p>
            <Link to='/'>
                <p>Home</p>
            </Link>
        </div>
    )
}

export default About
