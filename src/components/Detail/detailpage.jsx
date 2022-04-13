import React from "react";
import "./detailpage.scss";

function detailpage(props) {
  return (
    <div className="detailpage">
      <div class="row">
        <div class="column">
          <h2>Column 1</h2>
          <p>
            <img
              src="https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg"
              alt="Girl in a jacket"
              width="200"
              height="100"
            />
          </p>
          <p>
            <h1>Thailand</h1>
          </p>
          <p>
            <h4>
              Thailand, country located in the centre of mainland Southeast
              Asia. Located wholly within the tropics, Thailand encompasses
              diverse ecosystems, including the hilly forested areas of the
              northern frontier, the fertile rice fields of the central plains,
              the broad plateau of the northeast, and the rugged coasts along
              the narrow southern peninsula. Until the second half of the 20th
              century, Thailand was primarily an agricultural country, but since
              the 1960s increasing numbers of people have moved to Bangkok, the
              capital, and to other cities. Although the greater Bangkok
              metropolitan area remains the preeminent urban centre in the
              country, there are other sizable cities, such as Chiang Mai in the
              north, Nakhon Ratchasima (Khorat), Khon Kaen, and Udon Thani in
              the northeast, Pattaya in the southeast, and Hat Yai in the far
              south.
            </h4>
          </p>
          <p>
            <a href="#button12" className="button button2">
              Go back
            </a>
          </p>
        </div>
        <div class="column">
          <h2>Column 2</h2>
          <p>
            <img
              src="https://cdn.britannica.com/47/4047-050-71A61B0E/Thailand-map-boundaries-cities-locator.jpg"
              alt="Girl in a jacket"
              width="400"
              height="500"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default detailpage;
