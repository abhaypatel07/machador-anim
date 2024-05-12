import React from "react";
import Sphere from "./Sphere";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Faq = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".faq",
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    tl.from(".first-faq", {
      opacity: 0,
      x:-20,
      duration: 1,
      stagger: 0.2,
    })
      .from(".second-faq", {
        opacity: 0,
        x:20,
        duration: 1,
        stagger: 0.2,
      })
      .from(".third-faq", {
        opacity: 0,
        x:-20,
        duration: 1,
        stagger: 0.2,
      })
      .from(".forth-faq", {
        opacity: 0,
        x:20,
        duration: 1,
        stagger: 0.2,
      });
  }, []);
  return (
    <section className="lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:p-5 rounded-md faq">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full h-[90vw] lg:h-[80vh] lg:w-1/2">
            <Sphere />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="container flex flex-col justify-center px-4 py-8 lg:mt-6 mx-auto md:p-8">
              <h2 className="text-2xl font-semibold sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8">
                Welcome to Machador's FAQ section, where we address common
                queries about our platform and its features.
              </p>
              <div className="space-y-4">
                <details className="w-full border rounded-lg first-faq">
                  <summary className="px-4 py-6 focus:outline-none">
                    Is Machador free to use?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    Machador offers a complimentary but limited version. Users
                    can access up to 50 messages per month at no cost and have
                    the option to upgrade at any time for expanded usage.
                  </p>
                </details>
                <details className="w-full border rounded-lg second-faq">
                  <summary className="px-4 py-6 focus:outline-none">
                    How reliable are Machador's responses?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    The accuracy of Machador's responses depends on the quality
                    and relevance of the provided training data. With thorough
                    training, Machador can swiftly deliver precise answers to
                    customer inquiries. However, it's worth noting that, as an
                    AI model, occasional inaccuracies or incomplete responses
                    may occur, particularly with ambiguous or unfamiliar
                    queries. Consistent monitoring and updates to the training
                    data can enhance accuracy over time.
                  </p>
                </details>
                <details className="w-full border rounded-lg third-faq">
                  <summary className="px-4 py-6 focus:outline-none">
                    Does Machador provide 24/7 assistance?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    Once trained, your Machador AI assistant is equipped to
                    assist you round the clock, handling tasks and inquiries
                    efficiently.
                  </p>
                </details>
                <details className="w-full border rounded-lg forth-faq">
                  <summary className="px-4 py-6 focus:outline-none ">
                    Is it possible to utilize GPT-4?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                    Certainly, GPT-4 is accessible through the custom plan.
                    Nevertheless, we recommend sticking with GPT-3.5 for the
                    time being, as it offers quicker response times and higher
                    accuracy levels.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
