"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { type Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function InteractiveParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="interactiveParticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: { value: "#0f172a" },
        },
        fullScreen: false,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" }, // <-- aktifkan sentuh/klik
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4, // jumlah partikel saat disentuh
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
