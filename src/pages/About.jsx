import React from "react";
import { CustomModal } from "../components/CustomModal";
import Work from "../components/Work";

const About = () => {
  return (
    <>
      <div className="aboutPage__first">
        <section className="aboutPage__first__section">
          <CustomModal
            title="Driving Innovations And Empowering Business"
            description="Metalogic envisions a future where technology serves as a catalyst for limitless human potential, fostering innovation and empowering organizations to thrive in a transformative digital era."
            className="aboutPage__first__section__modal aboutPage__first__section__design"
          />
          <Work />
        </section>
        <div className="aboutPage__first__vision">
          <CustomModal
            heading="OUR APPROACH"
            title="Where Vision Meets Execution"
            description="At Metalogic, we navigate the digital landscape with innovation, collaboration, and a dedicated focus on client success. Rooted in a commitment to pioneering solutions and anticipating future needs, our client relationships go beyond transactions. Understanding unique challenges, we craft solutions that align effortlessly with business objectives. With a user-centric design philosophy, agile methodologies, and a commitment to continuous learning, we promise transformative success at Metalogic Software Pvt. Ltd."
          />
        </div>
      </div>

      <CustomModal
        heading="OUR FOUNDATION"
        title="Bridging Futures since 2023"
        description="We strive for excellence in every aspect of our work, from the quality of our code to the user experience of our products."
      />
    </>
  );
};

export default About;
