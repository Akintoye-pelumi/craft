import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown1() {
  return (
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Quantity 1
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">2</Dropdown.Item>
        <Dropdown.Item href="#/action-2">3</Dropdown.Item>
        <Dropdown.Item href="#/action-3">4</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown1;