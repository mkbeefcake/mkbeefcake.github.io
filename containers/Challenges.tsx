import React from 'react';
import { challenges } from '../portfolio';
import { Container, Row } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';

const Challenges = () => {
  return (
    challenges && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Challenges</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {challenges.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Challenges;
