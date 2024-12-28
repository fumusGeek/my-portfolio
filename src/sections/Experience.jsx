import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { workExperiences } from "../constans";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer";

const Experience = () => {
  const [animationName, setAnimationName] = React.useState("idle");
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={4} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Developer
                animationName={animationName}
                position-y={-3}
                scale={3}
              />
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({
                  id,
                  icon,
                  name,
                  pos,
                  background,
                  duration,
                  title,
                  animation,
                }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className={`work-content_logo ${background}`}>
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} - {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
