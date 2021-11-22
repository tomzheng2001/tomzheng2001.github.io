import Particles from "react-tsparticles";


const Background = () => {
    return <Particles id="tsparticles" options={{
        fpsLimit: 60,
        interactivity: {
          detect_on: 'window',
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ff7f51",
            distance: 150,
            enable: true,
            opacity: 0.35,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2.5,
            straight: false,
            bounce: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}/>
}

export default Background;