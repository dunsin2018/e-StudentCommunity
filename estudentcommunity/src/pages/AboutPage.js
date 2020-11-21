import React from "react";
import { Container } from "reactstrap";
import ImageBackground from "../components/elements/ImageBackground";

const AboutPage = () => {
  return (
    <div>
      <ImageBackground pageTitle="ABOUT" />
      <Container className="mt-5" style={{ marginBottom: "10%" }}>
        <h3>ABOUT US</h3>
        <p>
          The torch of this great Student community has been passed unto the
          elected ambassadors and it is only right for we to keep the fire
          burning, create an explosion and burn down all the negativity around.
          The goal of the current team is to preach the motto of the
          E-StudentUnionCommunity to all who care to listen, ‘self reliance
          through indigenous technology’, that’s why the community has different
          platform communities where members can share ideas and make complains
          bothering them as a means of bridging the gap between the students and
          the school authorities. The community isn’t just about academic
          prosperity alone, it creates an environment for cultural exchange,
          social integration, capacity building, skill development, leadership
          training, networking and sporting activities. To truly place
          E-StudentUnionCommunity in the upper echelon of societies, we must
          come together to work it out, both male and female, current members
          and alumni, staff and students. The drive to make the community better
          must be a burning flame in our hearts and we must do our best to keep
          the fire burning.
        </p>
      </Container>
    </div>
  );
};

export default AboutPage;
