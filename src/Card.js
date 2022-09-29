import React from "react";
import celebrities from "./celebrities.json";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <div>
        {celebrities.map((data) => {
            return (

<>
                <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.first +' '+ data.last}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




                <Accordion>
        <Accordion.Item>
          <Accordion.Header>{data.first}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </>
            )
        })}
    </div>
  );
}

export default Card2;

// {celebrities.map((x) => {
//     return (
//       <div class="accordion" id="accordionExample">
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="headingOne">
//             <button
//               class="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               {x.first}
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             class="accordion-collapse collapse show"
//             aria-labelledby="headingOne"
//             data-bs-parent="#accordionExample"
//           >
//             <div class="accordion-body">
//               <strong>This is the first item's accordion body.</strong> It
//               is shown by default, until the collapse plugin adds the
//               appropriate classes that we use to style each element. These
//               classes control the overall appearance, as well as the showing
//               and hiding via CSS transitions. You can modify any of this
//               with custom CSS or overriding our default variables. It's also
//               worth noting that just about any HTML can go within the{" "}
//               <code>.accordion-body</code>, though the transition does limit
//               overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   })}
