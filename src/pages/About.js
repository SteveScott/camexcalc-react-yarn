import React from 'react';

import Footer from './../components/Footer';

const About = () => (
    <main class="content">
        <div style={{margin: '10px', backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px'}}>
            <p>Sometimes your camera doesn't have a light meter. This tool is for you!</p>
            <p>
                Enter the camera’s F-Stop, Shutter Speed, and ISO, and this tool gives the optimum light level. Change your settings until you reach the desired lighting level, and then set your camera.
            </p>
            <p>
                To calculate the distance for the flash, enter the flash’s guide number at ISO 100, and adjust the F-Stop slider.  The Lomography Diana F+, for example, has a guide number of 24. You can find the guide number for various power levels in the flash’s manual, on the camera, on the web, or from the manufacturer.
            </p>
            <p>
                This app simply applies the “Sunny 16 Rule”: on a sunny day (light level 15) at ISO 100, F16, and 1/125th of a second, the film is properly exposed. Slow the shutter speed by half, open the aperture one stop, or double the ISO value, and the light level can be one value dimmer and properly exposed.
            </p>
            <p>
                    Over time you will get a feel for the light levels, and notice the ambiant light around you!
            </p>
            
        </div>

        <Footer />
    </main>
);

export default About;
