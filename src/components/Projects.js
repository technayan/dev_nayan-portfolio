import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import SingleProject from './SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('database.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []);
    return (
        <section name='Projects' className='project-section py-14 bg-gradient-to-b from-gray-800 to-black md:py-20'>
            <div className="container px-4 mx-auto md:px-10">
                <SectionTitle children={'My Projects'} />
                <div className="projects-wrapper grid grid-cols-1 gap-y-5 md:gap-y-10 lg:grid-cols-2 lg:gap-5">
                    {
                        // Projects
                        projects.map(project => <SingleProject key={project.id} project={project}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;