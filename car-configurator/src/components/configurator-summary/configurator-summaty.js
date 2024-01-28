import { useState } from "react";
import Modal from "../modal/modal";
import "./configurator-summary.css";

const ConfiguratorSummary = ({ selectedOptions, totalSum }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="options-summary">
      <h3 style={{ textAlign: "left" }}>Selected Options:</h3>
      <ul>
        {Object.keys(selectedOptions).map((optionName) => {
          const optionGroup = selectedOptions[optionName];
          return Object.keys(optionGroup).map((optionValue) => (
            <li
              key={`${optionName}-${optionValue}`}
              style={{ listStyleType: "none" }}
            >
              {optionName}: {optionValue} - {optionGroup[optionValue]}
            </li>
          ));
        })}
      </ul>
      {!isNaN(totalSum) && <h4>Total Price: {totalSum}</h4>}
      {/* <button onClick={() => setShowModal(true)}>Order now</button> */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ConfiguratorSummary;
