import { About } from "@components/sections/About";
import { Portfolio } from "@components/sections/Portfolio";
import { Layout } from "src/components/Layout";
import Hero from "src/components/sections/Hero";

export default function Home() {
    return (
        <Layout>
            <Hero />

            <About />
            <Portfolio />
        </Layout>
    );
}
