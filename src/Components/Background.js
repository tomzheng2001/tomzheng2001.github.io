import Particles from "react-tsparticles";


const Background = () => {
    return <Particles id="tsparticles" options={{
        particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: ["#ff7f51"]
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#b6b2b2"
              }
            },
            opacity: {
              value: 0.5211089197812949,
              random: false,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 8.017060304327615,
              random: true,
              animation: {
                enable: true,
                speed: 12.181158184520175,
                minimumValue: 0.1,
                sync: false
              }
            },
            lineLinked: {
              enable: false,
              distance: 150,
              color: "#ff7f51",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outMode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "connect"
              },
              resize: true
            },
            modes: {
              connect: {
                  distance: 100,
                  radius: 150,
              },
            }
          },
          detectRetina: false,
      }}/>
}

export default Background;