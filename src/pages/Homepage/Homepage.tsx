import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../layout/Header/";
import { HomepageProps } from "./interface";

const Homepage: React.FC<HomepageProps> = ({ router }) => {
  return (
    <div>
      {/* <Header /> */}
      <Container className="pt-4">
        <h1>Homepage</h1>
      </Container>
    </div>
  );
};
export default Homepage;
