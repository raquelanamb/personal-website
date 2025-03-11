import React, { useEffect, useState } from "react";

const ProjectParticles = () => {
    const [particlesLoaded, setParticlesLoaded] = useState(false);

    useEffect(() => {
        if (!window.tsParticles) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js";
            script.async = true;
            script.onload = () => setParticlesLoaded(true);
            document.body.appendChild(script);

            return () => document.body.removeChild(script);
        } else {
            setParticlesLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (particlesLoaded && window.tsParticles) {
            window.tsParticles.load("projectParticles", {
                fullScreen: { enable: true },
                particles: {
                    number: { value: 80 },
                    move: { enable: true, speed: 0.4 },
                    opacity: { value: 0.5 },
                    shape: { type: "circle" },
                    size: { value: 3.5 },
                    color: { value: "#FFF5E1" },
                    links: { enable: true, color: "#FFF5E1", distance: 120, opacity: 0.4 },
                }
            });
        }
    }, [particlesLoaded]);

    return (
        <div id="projectParticles" className="absolute inset-0 pointer-events-none"></div>
    );
};

export default ProjectParticles;
