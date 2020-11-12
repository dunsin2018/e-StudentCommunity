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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          tempore obcaecati minima iure illum vero velit non soluta nam nisi,
          perferendis ipsam ullam minus laborum aut sequi dolore. Reprehenderit,
          rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed
          explicabo velit eaque dicta consequatur aspernatur reiciendis itaque
          debitis molestias mollitia ex atque impedit, pariatur quos saepe
          perspiciatis id sequi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Expedita, perspiciatis numquam placeat autem
          reiciendis at doloremque eligendi totam culpa error sit odit quae
          consequuntur, voluptas delectus sint possimus impedit cumque? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Rem ratione est
          laudantium ad? Labore voluptatibus consequuntur, dolor libero deleniti
          eveniet voluptates aperiam sint aliquam ut veniam molestiae, atque
          neque similique. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Modi magnam ratione rem blanditiis? Inventore, ullam modi!
          Voluptate ratione impedit recusandae asperiores? Esse totam, adipisci
          id ipsum quis odio velit vel.
        </p>
      </Container>
    </div>
  );
};

export default AboutPage;
