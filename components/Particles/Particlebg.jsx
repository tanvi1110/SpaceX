import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesconfig from './config/particlesconfig'

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <Particles params={particlesconfig} url="http://foo.bar/particles.json" init={particlesInit} />
    );
};

export default ParticleBackground ;