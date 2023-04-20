import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

const Portfolio = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: "PawPals",
            deployedLink: "https://pawpals.herokuapp.com/",
            image: require('../../assets/pawpals.png'),
            fadeDuration: '1000',
            description: 'Adopt A Pet Near You! ',
            toolsUsed: ['Express', 'NodeJs', 'MySql', 'Handlebars']

        },
        {
            name: "CarrotCalendar",
            deployedLink: "https://thebobfather2.github.io/carrotcalendar/",
            image: require('../../assets/carrotcalendar.jpeg'),
            description: "With Carrot you can easily switch the time zone to check what time an event will take place for your friends in order to better coordinate online meetups. Additionally, when a user adds an event to the Carrot Calendar, the data is stored on the cloud! This allows multiple communities to install the app on their sites too so that events can be more easily coordinated with partnering projects! Setting up a Rumble Royale, a Twitter Space, or Poker Night with friends across the globe has never been easier!.",
            fadeDuration: "1100",
            toolsUsed: ['NodeJs', 'JQuery', 'Firebase', 'Day.js', 'Bootstrap', 'OpenWeather', 'WorldTime']
        },
        {
            name: "run-buddy",
            deployedLink: "https://mriya20.github.io/run-buddy/",
            image: require('../../assets/runbuddy.png'),
            fadeDuration: '1200',
            description: "A website that offers fitness training services.",
            toolsUsed: ['HTML', 'CSS']
        },
        {
            name: "finwiz",
            deployedLink: "https://github.com/larigens/finwiz",
            image: require('../../assets/FinWiz.png'),
            fadeDuration: '1200',
            description: "FinWiz is a web-based factoring software designed specifically for transportation companies to help them manage their cash flow more efficiently. ",
            toolsUsed: ['Node.js', 'Express.js', 'React', 'API', 'MongoDB', 'Regex', 'GraphQL', 'JSON Web Tokens', 'Stripe']
        },



    ]

    const handleClick = project => {
        setSelectedProject(project);
        setIsModalOpen(!isModalOpen);
    };




    return (
        <section id='portfolio'>
            <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container" data-aos-duration='700'>My most recent projects</h5>
            <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container" data-aos-duration='900'>My Portfolio</h2>

            <div className="container portfolio__container">

                {
                    projects.map(({ name, image, deployedLink, description, toolsUsed, fadeDuration }) => (
                        <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container" data-aos-duration={fadeDuration}
                        >
                            <div className="portfolio__item-image">
                                <img src={image} alt={`${name} app Screenshot`} />
                            </div>
                            <h3
                                className='portfolio__item-name'
                                onClick={() => handleClick({ name, image, deployedLink, toolsUsed, description })}
                            >{name}</h3>

                            <div className="portfolio__item-cta">
                                <a className='btn'
                                    href={`https://github.com/mriya20/${name}`}
                                    target='_blank'
                                    rel="noreferrer"
                                >GitHub</a>
                                <a className='btn btn-primary'
                                    href={deployedLink}
                                    target='_blank'
                                    rel="noreferrer"
                                >Live Demo</a>
                            </div>
                        </article>
                    ))
                }

            </div>

            {isModalOpen && (<Modal
                closeModal={handleClick}
                project={selectedProject}
            />)}
        </section>
    )
}

export default Portfolio