import { Project } from "./Project.js";
import styled from "styled-components";
import { Headline } from "@components/Headline.js";
import { useEffect, useState } from "react";
import { cmsUrl } from "src/styles/variables.js";

const PortfolioWrapper = styled.section`
    margin-top: 10rem;
`;

const ProjectsWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    @media (max-width: 768px) {
        gap: 3rem;
    }
    margin-bottom: 4rem;
`;

export const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch(`${cmsUrl}/api/projects?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                setProjects(data.data);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <PortfolioWrapper id="portfolio">
            <Headline text="Mein Portfolio" sub="Eine Auwahl meiner aktuellen Projekte" />

            <ProjectsWrapper>
                {projects.map((project, index) => (
                    <Project key={project.id} project={project} />
                ))}
            </ProjectsWrapper>
        </PortfolioWrapper>
    );
};
