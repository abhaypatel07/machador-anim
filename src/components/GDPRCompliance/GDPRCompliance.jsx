import React, { useEffect } from "react";
import GDRP from "../../../public/animations/GDRP.json";
import Lottie from "lottie-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GDPRCompliance = () => {
  useEffect(() => {
    const cardParElements = document.querySelectorAll('.hover-card-effect');
    VanillaTilt.init(cardParElements, {
      max: 10,
      speed: 300,
      perspective: 1000,
    });

  }, [])
  useGSAP(() => {
    gsap.from("#gdrp-par", {
      y: 50,
      scale: 0.8,
        opacity: 0,
      scrollTrigger: {
        trigger: "#gdrp-par",
        start: "top 80%",
        end: 'top 50%',
        scrub:1,
      },
    });
  }, []);
  return (
    <div
      className="w-full overflow-hidden flex justify-center items-center p-8"
      id="gdrp-par"
    >
      <div className="hover-card-effect flex justify-center flex-col-reverse md:flex-row items-center filter brightness-60 overflow-hidden m-4 bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 p-5 gap-4">
        <div className="w-full md:w-1/2">
          <h4 className="mb-[14px] text-3xl font-semibold text-dark self-start">
            GDPR Compliance:
          </h4>

          <p className="text-xl">
            Fully GDPR compliant – your knowledge is secure and protected.
          </p>
          <p className="text-xl">
            Rest assured, your data is handled with the highest level of
            security.
          </p>
        </div>
        <div className="w-full md:w-1/3" id="gdpr-svg">
          <Lottie animationData={GDRP} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;
