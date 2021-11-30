import Particles from "react-tsparticles";
import React from "react";

function Particle() {
  
    return (
    <>
        <Particles width= "100%" height= "100vh"
            params={{
                backgroundMode: {
                    enable: true,
                    zIndex: 0
                },
                background: {
                    color: "var(--background-dark-grey)"
                },
                fpsLimit: 60,
                interactivity:{
                    detectsOn: "canvas",
                    events: {
                        // onClick: { enable: true, mode: "repulse" },
                        // onHover: {
                        // enable: true,
                        // mode: "bubble",
                        // parallax: { enable: false, force: 2, smooth: 10 }
                        // },
                        onHover:{ enable: true, mode: "repulse"},
                        resize: true
                    },
                },
                particles: {
                    color: { 
                        value: '#72a0c4',
                    },
                    number: {
                        value: 77,
                        density: {
                            enable: true,
                            value_area: 1200
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: '#fff',
                        opacity: 0.4,
                        width: 1,
                        shadow: {
                            enable: true,
                            color: "#b999d5",
                            blur: 6
                        }
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: .6,
                        attract: {
                            rotateX: 600,
                            rotateY: 1200
                        } 
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            speed: 40,
                            size_min: 0.1
                        }
                    },
                    opacity: {
                        value: 0.8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.6,
                            sync: false
                        }
                    },
                }
            }}
        />
    </>
    );
};

export default Particle;