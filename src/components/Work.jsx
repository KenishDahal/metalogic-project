import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Work = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="aboutPage__first__section__absolute">
        <div className="aboutPage__first__section__absolute__no">
          <div className="aboutPage__first__section__absolute__no__counter">
            {counterOn && <CountUp start={0} end={32} duration={4} delay={1} />}
            +
          </div>
          <div className="aboutPage__first__section__absolute__no__body eyebrow">
            Projects Completed
          </div>
        </div>
        <div className="aboutPage__first__section__absolute__no">
          <div className="aboutPage__first__section__absolute__no__counter">
            {counterOn && <CountUp start={0} end={50} duration={3} delay={1} />}
            +
          </div>
          <div className="aboutPage__first__section__absolute__no__body eyebrow">
            Satisfied clients
          </div>
        </div>
        <div className="aboutPage__first__section__absolute__no">
          <div className="aboutPage__first__section__absolute__no__counter">
            {counterOn && <CountUp start={0} end={18} duration={5} delay={1} />}
            +
          </div>
          <div className="aboutPage__first__section__absolute__no__body eyebrow">
            Experts
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Work;
