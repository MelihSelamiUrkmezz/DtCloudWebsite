import { Card } from 'react-bootstrap';
import styled from "styled-components";
import './Card.css'
const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
`;

function ExampleCard() {
  return (
    <Card className="my-card">
    
      <Card.Body>
      <center><img src="./k8s.png" alt=""style={{ width: '150px', height: '150px', marginLeft: '75px' }}/></center>
      <Label>Playground User Kubeconfig</Label>
      </Card.Body>
    </Card>
  );
}

export default ExampleCard;