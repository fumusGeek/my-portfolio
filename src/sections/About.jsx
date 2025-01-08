import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { toast, Toaster } from "sonner";
import { IoLogoJavascript, IoLogoReact, IoLogoLaravel } from "react-icons/io5";
import { SiTypescript, SiCodeigniter } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const About = () => {
  const [hasCopied, setHasCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("hanifantoni2@gmail.com");
    setHasCopied(true);

    toast.info("Copied, don't forget to contact me! 😊");
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="my-20 c-space" id="about">
      <Toaster richColors position="top-center" />
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit"
            />
            <div>
              <p className="grid-headtext">
                Hi, I'm Hanif Ifran Antoni, you can call me Hanif
              </p>
              <p className="grid-subtext">
                With over 1 year exprience in web development, I have enhanced
                my skill on both back-end and front-end
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-24 mt-32"
            >
              <SwiperSlide className="ml-5">
                <IoLogoJavascript className="tech-stack" />
              </SwiperSlide>
              <SwiperSlide>
                <SiTypescript className="w-10 h-10 fill-white" />
              </SwiperSlide>
              <SwiperSlide>
                <IoLogoReact className="tech-stack" />
              </SwiperSlide>
              <SwiperSlide>
                <IoLogoLaravel className="tech-stack" />
              </SwiperSlide>
              <SwiperSlide>
                <SiCodeigniter className="tech-stack" />
              </SwiperSlide>
            </Swiper>
            <div className="flex gap-5 w-full items-center justify-center mb-24 mx-auto"></div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus in React and
                Laravel ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">Currently working on-site.</p>
              <p className="grid-subtext">
                I'm based in Indonesia, with remote work available.
              </p>
              <a href="#contact" className="w-fill">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Loves to Code</p>
              <p className="grid-subtext">
                I love to code eventhough sometimes it drive me crazy.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  hanifantoni2@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
