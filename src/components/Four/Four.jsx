import "./four.css";
import Z from "../img/agency.mp4";
import React from "react";

const Four = () => {
  return <div className="f">
      <h2 className="about-agency">
          We meet our clients at eye level. We analyze and <br />
          question the existing, think differently and new. <br />
          With a focus on strategy and creativity, we find <br />
          bold solutions. This leads not only to <br />
          outstanding ideas - but to great successes. <br />
          <br />
          We don't just do communication - we shape it. <br />
          Only then can we create a meaingful <br />
          conversation that ultimately leads to the goal. <br />
          <br />
          Pratham
      </h2>
      <div className="agency"></div>
      <div className="agen">
      <video loop muted autoPlay className="agency-vid">
        <source
          src={Z}
          type="video/mp4"
        />
       </video>
      </div>
      <div className="texxt-area">
      <a href="#" class="Button-pos">See our services</a>
      <p className="about-text">
      Open, courageous and rousing. Without all-in or outdated views. Instead with <br />
      freedom and room to grow. With responsibility and inner drive. With diverse <br />
      teams and remarkable personalities. <br />
      <br />
      Creating enduring customer loyalty for you
Be it your highly trustable employees <br />or your extremely loyal and affluent brand advocates you call customers, the objective <br />is to Acquire, Engage and Retain.

With a strategic approach to delivering <br /> innovative loyalty solutions by creating unique rewards and benefits platforms,<br /> Thriwe has served global leaders in lifestyle & wellness, digital <br />
 experiences, travel, and dining sectors.
      </p>
      </div>
  </div>;
};

export default Four;


