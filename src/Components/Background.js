import Particles from "react-tsparticles";


const Background = () => {
    return <Particles id="tsparticles" options={{
      "autoPlay": true,
      "fullScreen": {
        "enable": true,
        "zIndex": 1
      },
      "detectRetina": true,
      "duration": 0,
      "interactivity": {
        "detectsOn": "canvas",
        "events": {
          "onClick": {
            "enable": false,
            "mode": "push"
          },
          "onDiv": {
            "selectors": "#repulse-div",
            "enable": false,
            "mode": "repulse",
            "type": "circle"
          },
          "onHover": {
            "enable": true,
            "mode": "bubble",
            "parallax": {
              "enable": false,
              "force": 60,
              "smooth": 10
            }
          },
          "resize": true
        },
        "modes": {
          "attract": {
            "distance": 300,
            "duration": 2,
            "easing": "ease-out-quad",
            "factor": 2,
            "maxSpeed": 50,
            "speed": 1
          },
          "bounce": {
            "distance": 200
          },
          "bubble": {
            "distance": 200,
            "duration": 2,
            "mix": false,
            "opacity": 0.3,
            "size": 15
          },
          "connect": {
            "distance": 80,
            "links": {
              "opacity": 0.2,
              "width": 0.2
            },
            "radius": 150
          },
          "grab": {
            "distance": 400,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 0.2
            }
          },
        }
      },
      "manualParticles": [],
      "motion": {
        "disable": false,
        "reduce": {
          "factor": 4,
          "value": true
        }
      },
      "particles": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "collisions": {
          "bounce": false,
          "enable": false,
          "mode": "bounce",
          "overlap": {
            "enable": true,
            "retries": 0
          }
        },
        "color": {
          "value": "ff7f51",
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "s": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            },
            "l": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "sync": true
            }
          }
        },
        "destroy": {
          "mode": "none",
          "split": {
            "count": 1,
            "factor": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 3
            },
            "rate": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": {
                "min": 4,
                "max": 9
              }
            },
            "sizeOffset": true
          }
        },
        "gradient": [],
        "groups": {},
        "life": {
          "count": 0,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "sync": false
          },
          "duration": {
            "random": {
              "enable": false,
              "minimumValue": 0.0001
            },
            "value": 0,
            "sync": false
          }
        },
        "links": {
          "blink": false,
          "color": {
            "value": "#ffffff"
          },
          "consent": false,
          "distance": 150,
          "enable": false,
          "frequency": 1,
          "opacity": 0.4,
          "shadow": {
            "blur": 5,
            "color": {
              "value": "#00ff00"
            },
            "enable": false
          },
          "triangles": {
            "enable": false,
            "frequency": 1
          },
          "width": 1,
          "warp": false
        },
        "move": {
          "angle": {
            "offset": 0,
            "value": 90
          },
          "attract": {
            "distance": 200,
            "enable": false,
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "decay": 0,
          "distance": {},
          "direction": "none",
          "drift": 0,
          "enable": true,
          "gravity": {
            "acceleration": 9.81,
            "enable": false,
            "inverse": false,
            "maxSpeed": 20
          },
          "path": {
            "clamp": true,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0
            },
            "enable": false,
            "options": {}
          },
          "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "random": false,
          "size": false,
          "speed": 1.5,
          "spin": {
            "acceleration": 0,
            "enable": false
          },
          "straight": false,
          "trail": {
            "enable": false,
            "length": 10,
            "fillColor": {
              "value": "#000000"
            }
          },
          "vibrate": false,
          "warp": false
        },
        "number": {
          "density": {
            "enable": true,
            "area": 400,
            "factor": 500
          },
          "limit": 200,
          "value": 200
        },
        "opacity": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 0.3,
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0.1
          }
        },
        "orbit": {
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "sync": false
          },
          "enable": false,
          "opacity": 1,
          "rotation": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 45
          },
          "width": 1
        },
        "reduceDuplicates": false,
        "repulse": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "enabled": false,
          "distance": 1,
          "duration": 1,
          "factor": 1,
          "speed": 1
        },
        "roll": {
          "darken": {
            "enable": false,
            "value": 0
          },
          "enable": false,
          "enlighten": {
            "enable": false,
            "value": 0
          },
          "mode": "vertical",
          "speed": 25
        },
        "rotate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "sync": false
          },
          "direction": "clockwise",
          "path": false
        },
        "shadow": {
          "blur": 0,
          "color": {
            "value": "#000000"
          },
          "enable": false,
          "offset": {
            "x": 0,
            "y": 0
          }
        },
        "shape": {
          "options": {},
          "type": "star"
        },
        "size": {
          "random": {
            "enable": true,
            "minimumValue": 5
          },
          "value": {
            "min": 1,
            "max": 5
          },
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 40,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0.1
          }
        },
        "stroke": {
          "width": 0
        },
        "tilt": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "sync": false
          },
          "direction": "clockwise",
          "enable": false
        },
        "twinkle": {
          "lines": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          },
          "particles": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          }
        },
        "wobble": {
          "distance": 5,
          "enable": false,
          "speed": 50
        },
        "zIndex": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "opacityRate": 1,
          "sizeRate": 1,
          "velocityRate": 1
        }
      },
      "pauseOnBlur": true,
      "pauseOnOutsideViewport": true,
      "responsive": [],
      "themes": [],
      "zLayers": 100
    }}/>
    
}

export default Background;