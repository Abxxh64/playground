"use client";
import Rive from "@rive-app/react-canvas";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const Features = () => {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-6  max-w-4xl mx-auto">
        {/* Lightning Fast Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative col-span-2 sm:col-span-1 row-span-2 bg-[#0d0422] rounded-xl p-6 border border-gray-800 shadow-lg flex items-center justify-center overflow-hidden"
        >
          <FloatingStars />
          {/* <SpotlightEffect /> */}

          <Rive
            src="/bolt.riv"
            stateMachines="State Machine 1"
            shouldResizeCanvasToContainer={true}
            className="absolute inset-0 h-full w-full z-10"
          />

          {/* <div className="absolute top-0 left-2/3 transform -translate-x-1/2 w-44 h-24 bg-[#3423DC] blur-3xl rounded-full z-20" /> */}
          <div className="absolute top-0 left-2/3 transform -translate-x-1/2 w-3/4 h-36 bg-gradient-to-b from-[#3423DC] to-transparent  blur-3xl rounded-full z-20" />

          <div className="text-center font-semibold text-white z-20">
            <h3 className=" text-4xl ">Lightning Fast</h3>
            <p className="text-3xl italic">Experience</p>
          </div>
        </motion.div>

        {/* Tracking Countries Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-[#0d0422] row-span-1 rounded-xl p-6 border border-gray-800 shadow-lg h-[350px] overflow-hidden "
        >
          <FloatingStars />ƒ
          {/* <SpotlightEffect /> */}
          <h3 className="text-white text-xl font-semibold">Tracking</h3>
          <p className="text-purple-400 text-3xl font-bold">256 Countries</p>
          <p className="text-gray-400 text-lg">in Single Project</p>
          <TrackingGlobe />
        </motion.div>

        {/* Accurate Estimations Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative grid-background row-span-1 rounded-xl p-6 border border-gray-800 shadow-lg flex items-center justify-center overflow-hidden"
        >
          {/* Dark Overlay with Central Light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0)_20%,rgba(19,6,39,0.7)_90%)] z-10"></div>

          {/* <div className="absolute w-full aspect-square border-[20px] blur-md p-12 bg-transparent opacity-50 rounded-full  border-[#3423DC]/40">
            <div className=" w-full aspect-square bg-transparent border-[20px] blur-md rounded-full border-[#3423DC]/50" />
          </div> */}

          <motion.div
            animate={{
              scale: [1.4, 1.3, 1.4],
              opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            className="absolute -inset-0 w-full aspect-square border-[20px] blur-md bg-transparent opacity-100 rounded-full border-[#3423DC]/40 z-10"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2], 
              opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-[80%] aspect-square border-[20px] blur-md bg-transparent rounded-full border-[#3423DC]/50 z-20"
          />

          <FloatingBoxes />

          {/* <SpotlightEffect /> */}

          <div className="text-center font-semibold text-white">
            <h3 className="text-white text-3xl font-semibold">
              Extremely Accurate
            </h3>
            <p className="text-gray-400 text-2xl">Estimations for CTRs</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

const FloatingStars = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 3 + 1; // Random size for stars
        return (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3], // Fade in and out
              x: [
                `${Math.random() * 10 - 5}px`,
                `${Math.random() * 20 - 10}px`,
              ], // Small horizontal movement
              y: [
                `${Math.random() * 10 - 5}px`,
                `${Math.random() * 20 - 10}px`,
              ], // Small vertical movement
            }}
            transition={{
              duration: Math.random() * 5 + 3, // Each star has a different duration
              repeat: Infinity,
              repeatType: "mirror", // Move back and forth
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

const FloatingBoxes = () => {
  return (
    <div className="absolute inset-0 z-30">
     
      <FloatingBox
        src="/accurate-box.png"
        size={60}
        top="0"
        left="20%"
        speed={1.1}
        scaleFactor={0.1}
        rotateFactor={15}
      />

      <FloatingBox
        src="/accurate-box.png"
        size={50}
        bottom="0"
        right="20%"
        speed={1}
        scaleFactor={0.1}
        rotateFactor={15}
      />
    </div>
  );
};
const FloatingBox = ({
  src,
  size,
  top,
  left,
  right,
  bottom,
  speed,
  scaleFactor,
  rotateFactor,
}: any) => {
  const ref = useRef<HTMLImageElement>(null);

  useAnimationFrame((t) => {
    if (ref.current) {
      const time = t / 1000; // Convert ms to seconds
      const radiusX = 20; // Horizontal movement range
      const radiusY = 10; // Vertical movement range
      const speedFactor = speed || 1; // Speed modifier

      // Calculate position in the oval
      const x = Math.cos(time * speedFactor) * radiusX;
      const y = Math.sin(time * speedFactor) * radiusY;

      // Smooth scaling: Scale slightly up and down continuously
      const scale = 1 + Math.sin(time * speedFactor) * scaleFactor;

      // Smooth rotation: Rotates based on position in the oval path
      const rotation = Math.sin(time * speedFactor) * rotateFactor;

      ref.current.style.transform = `
          translateX(${x}px)
          translateY(${y}px)
          rotate(${rotation}deg)
          scale(${scale})
        `;
    }
  });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt="Accurate Box"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        right,
        bottom,
        position: "absolute",
      }}
    />
  );
};

const TrackingGlobe = () => {
  return (
    <div
      className="absolute inset-0 rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0b021700 22.69%, #16092a80)",
      }}
    >
      {/* Background layer */}
      {/* <div className="absolute inset-0 mix-blend-color-dodge z-[8]" /> */}

      <div className="absolute left-1/4 top-1/3 w-[419.66px] h-[419.66px] rounded-full z-[9]">
        <div
          className="absolute inset-0 rounded-full backdrop-blur-[9.5px]"
          style={{
            background:
              "radial-gradient(48.25% 48.25% at 50% 7.43%, #ffffff0a, #fff0), linear-gradient(180deg, #ffffff0a, #fff0 57.23%), #0a01180a",
          }}
        />

        <div
          className="absolute inset-0 rounded-full mix-blend-color-dodge"
          style={{
            background:
              "radial-gradient(52% 50% at 55% 49.96%, #000 69%, #040404, #101010, #242424, #414141, #656565 89%, #929292 92%, #c6c6c6, #e4e4e4)",
          }}
        />
      </div>

      {/* Circles wrapper with mask */}
      <div className="absolute inset-0 mix-blend-overlay z-[10]">
        <div
          className="absolute left-1/4 top-1/3 w-[419.66px] h-[419.66px] rounded-full"
          style={{
            WebkitMaskImage:
              "conic-gradient(from 144.35deg at 50.09% 47.15%, #fff0 -108.02deg, #fff0 115.31deg, #fff 169.48deg, #fff0 251.98deg, #fff0 475.31deg)",
            maskImage:
              "conic-gradient(from 144.35deg at 50.09% 47.15%, #fff0 -108.02deg, #fff0 115.31deg, #fff 169.48deg, #fff0 251.98deg, #fff0 475.31deg)",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        >
          {[...Array(34)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full animate-trackingCircle"
              style={{
                width: `${100 - i * 2}%`, // Decreasing size for concentric effect
                height: `${100 - i * 2}%`,
                top: `${i}%`, // Properly space out the circles
                left: `${i}%`,
                animationDelay: `${3.7 - i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <img
        src="/globe-tracking-lines.png"
        alt="Globe Lines"
        className="absolute inset-0 object-cover z-[11]"
      />
      {/* Lines overlay */}
      {/* <div className="absolute inset-0 mix-blend-screen z-[11]" /> */}

      {/* Light overlay */}
      {/* <div className="absolute inset-0 mix-blend-overlay z-[12]" /> */}
    </div>
  );
};

const SpotlightEffect = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div className="relative w-full h-full" onMouseMove={handleMouseMove}>
      {/* Spotlight Light Effect */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-white/10 blur-3xl mix-blend-overlay pointer-events-none "  
        animate={{
          left: cursorPos.x - 96, // Center light
          top: cursorPos.y - 96,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }} // Smooth movement
      />
    </div>
  );
};
