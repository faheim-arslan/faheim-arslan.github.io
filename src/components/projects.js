import * as React from "react";

const Projects = () => {
    return <section className="projects min-h-screen">
        <div className="font-roboto-medium text-3xl sm:text-5xl md:text-5xl lg:text-5xl flex justify-center items-center mb-1/25 sm:mb-1/50 md:mb-1/50 lg:mb-1/50">My Work</div>
        <br />

        <div className="project-list">
            <div>Spring Source Code Generator</div>
            <div>NuhArc</div>
            <div>Dublin bikes time series analysis</div>
            <div>portfolio</div>
            <div>github issue finder</div>
            <div>airbnb price estimator</div>
            <div>Fashion Generator using GANs</div>
        </div>
    </section>
}

export default Projects;