import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import SingleProject from './SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    console.log(projects);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []);
    return (
        <section className='project-section py-14 bg-gray-900'>
            <div className="container px-4 mx-auto">
                <SectionTitle children={'Projects'} />
                <div className="projects-wrapper flex flex-col gap-y-5">
                    {
                        projects.map(project => <SingleProject key={project._id} project={project}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;