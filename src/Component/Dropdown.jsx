// import Dropdown from 'react-bootstrap/Dropdown';

// function Dropdown1() {
//   return (
//     <Dropdown className='dropdown'>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Quantity 1
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#">Quantity 2</Dropdown.Item>
//         <Dropdown.Item href="#">Quantity 3</Dropdown.Item>
//         <Dropdown.Item href="#">Quantity 4</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default Dropdown1;

// src/Component/Dropdown1.js
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown1({ quantity, setQuantity }) {
  return (
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Quantity {quantity}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {[1, 2, 3, 4].map((qty) => (
          <Dropdown.Item key={qty} onClick={() => setQuantity(qty)}>
            Quantity {qty}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown1;
