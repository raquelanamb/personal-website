import React, { useEffect, useState } from "react";
import "./background.css";

const Background = () => {
    const [particlesLoaded, setParticlesLoaded] = useState(false);

    useEffect(() => {
        // Check if script is already loaded
        if (!window.tsParticles) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js";
            script.async = true;
            script.onload = () => setParticlesLoaded(true);
            document.body.appendChild(script);

            return () => document.body.removeChild(script); // Cleanup
        } else {
            setParticlesLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (particlesLoaded && window.tsParticles) {
            window.tsParticles.load("tsparticles", {
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: { value: 100 },
                    move: { enable: true, speed: 0.4 },
                    opacity: { value: 1 },
                    shape: { type: "circle" },
                    size: { value: 3.5 },
                    color: { value: "#ffffff" },
                    links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.4 },
                }
            });
        }
    }, [particlesLoaded]); // Run only when particles are loaded

    return <div id="tsparticles" className="bg-pan-tl"></div>;
};

export default Background;
