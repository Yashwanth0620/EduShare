import React from 'react';
import { Card, Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';

const MyGroups = () => {
  const groups = [
    {
      id: 1,
      name: 'Math Study Group',
      description: 'A group for discussing math problems and solutions.',
      members: 12,
      upcomingSession: 'Sep 10, 2024 - 10:00 AM',
    },
    {
      id: 2,
      name: 'AI and ML Enthusiasts',
      description: 'For those passionate about AI and Machine Learning.',
      members: 8,
      upcomingSession: 'Sep 12, 2024 - 2:00 PM',
    },
    // Add more groups as needed
  ];

  return (
    <Container className="my-4">
      <h2 className="mb-4">My Groups</h2>
      <InputGroup className="mb-4">
        <Form.Control placeholder="Search for a group..." />
        <Button variant="outline-secondary">Search</Button>
      </InputGroup>
      <Row>
        {groups.map(group => (
          <Col key={group.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{group.name}</Card.Title>
                <Card.Text>{group.description}</Card.Text>
                <Card.Text><strong>Members:</strong> {group.members}</Card.Text>
                <Card.Text><strong>Upcoming Session:</strong> {group.upcomingSession || 'No upcoming sessions'}</Card.Text>
                <Button variant="primary" className="me-2">View Group</Button>
                <Button variant="danger" className="me-2">Leave Group</Button>
                {/** Only show Manage Group if the user is the admin */}
                <Button variant="secondary">Manage Group</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyGroups;
