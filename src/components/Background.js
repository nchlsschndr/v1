import styled from "styled-components";
import { useEffect, useRef } from "react";
import { fade } from "src/styles/variables";

const BgContainer = styled.div`
    position: fixed;
    perspective: 600px;
    display: flex;
    align-items: flex-end;
    width: 300vw;
    height: 100vh;
    top: 0;
    left: -100vw;
    z-index: -9999;
    ${fade(9)}
`;
const BgMoving = styled.div`
    position: relative;
    z-index: -9999;
    width: 100%;
    height: 90%;
    opacity: 0.5;
    background-image: radial-gradient(red 0.1rem, transparent 0);
    background-size: 2.5rem 2.5rem;
    background-position: 2.2rem 2.2rem;
    @media (max-width: 768px) {
        background-size: 10vw 10vw;
        background-position: 0 0;
    }
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        background-image: linear-gradient(to bottom, var(--color-main), rgba(0, 0, 0, 0) 100%);
    }
`;

export const Background = () => {
    const getMinToMaxPercent = (percent, min, max) => {
        let range = max - min;
        let x = (range / 100) * percent;
        return min + x;
    };

    const ref = useRef(null);

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        const el = ref.current;

        const scrolling = () => {
            if (el) {
                let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                let scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                let viewportHeight = window.innerHeight;

                let range = pageHeight - viewportHeight;
                let percentScrolled = (scrollTop / range) * 100;

                const rotation = getMinToMaxPercent(percentScrolled, 0, 70);
                const translation = getMinToMaxPercent(percentScrolled, 0, 30);

                el.style.transform = `rotateX(${rotation}deg) translateY(${translation}vh)`;
            }
        };

        window.addEventListener("scroll", scrolling);
        return () => {
            window.removeEventListener("scroll", scrolling);
        };
    });

    return (
        <BgContainer>
            <BgMoving ref={ref} />
        </BgContainer>
    );
};
