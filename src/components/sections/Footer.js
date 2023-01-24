import { CtaBtn } from "@components/CtaBtn";
import { Headline } from "@components/Headline";
import { Container } from "@components/Layout";
import { Logo } from "@components/Logo";
import { FaPaperPlane } from "react-icons/fa";
import styled from "styled-components";
import { glassStyle } from "../../styles/variables";

const StyledContact = styled.div`
    margin-top: 20rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledFooter = styled.footer`
    ${glassStyle};
    margin-top: 5rem;
    padding: 25px;
    font-weight: 700;

    .lists {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        > * {
            width: 25%;
        }
        svg {
            height: 35px;
        }
        ul {
            list-style-type: none;

            li {
                line-height: 1.7;
                font-weight: 800;
                a {
                    color: inherit;
                    font-weight: 600;
                }
                a:hover {
                    text-decoration: underline;
                    color: white;
                }
            }
            li:first-child {
                margin-bottom: 1rem;
            }
            li:not(:first-child) {
                font-weight: 400;
            }
        }
    }
`;

const Credits = styled.p`
    text-align: center;
    color: var(--red);
    margin-top: 3rem;
    font-weight: 700;
    text-shadow: ;
`;

export const Footer = () => {
    return (
        <Container>
            <StyledContact>
                <Headline center text="Worauf wartest du?" />
                <h3>Ich bin immer auf der Suche nach neuen und herausfordernden Projekten.</h3>
                <CtaBtn href="mailto:hallo@nicholas-schneider.de">
                    Sag hallo!
                    <FaPaperPlane />
                </CtaBtn>
            </StyledContact>
            <StyledFooter id="kontakt">
                <div className="lists">
                    <Logo notext color={"var(--white)"} />
                    <ul>
                        <li>Kontakt</li>
                        <li>
                            <a href="mailto:hallo@nicholas-schneider.de">hallo@nicholas-schneider.de</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Navigation</li>
                        <li>
                            <a href="#start">Nach oben</a>
                        </li>
                        <li>
                            <a href="#ueber-mich">Über mich</a>
                        </li>
                        <li>
                            <a href="#portfolio">Projekte</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Finde mich bei</li>
                        <li>
                            <a href="https://github.com" target="_blank" rel="noreferrer">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io" target="_blank" rel="noreferrer">
                                Codepen
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://spotify.com" target="_blank" rel="noreferrer">
                                Spotify
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>Rechtliches</li>
                        <li>
                            <a href="impressum">Impressum</a>
                        </li>
                        <li>
                            <a href="datenschutz">Datenschutz</a>
                        </li>
                    </ul>
                </div>
            </StyledFooter>
            <Credits>Entworfen und entwickelt von Nicholas Schneider</Credits>
        </Container>
    );
};
