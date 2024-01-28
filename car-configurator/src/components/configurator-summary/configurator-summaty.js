import { useState } from "react";
import Modal from "../modal/modal";

const ConfiguratorSummary = ({ selectedOptions, totalSum }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="summary">
      <h3>Selected Options:</h3>
      <ul>
        {Object.keys(selectedOptions).map((optionName) => {
          const optionGroup = selectedOptions[optionName];
          return Object.keys(optionGroup).map((optionValue) => (
            <li key={`${optionName}-${optionValue}`}>
              {optionName} - {optionValue} - {optionGroup[optionValue]}
            </li>
          ));
        })}
      </ul>
      {!isNaN(totalSum) && <p>Total Price: {totalSum}</p>}
      <button onClick={() => setShowModal(true)}>order now</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ConfiguratorSummary;
