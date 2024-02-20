import React from "react";
import imgError from "../../assets/Fehler-Problem.webp";
const ErroMassage = () => {
  return (
    <div className="error-container">
      <img src={imgError} alt="error img" />
      <p className="error-message">
        Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
      </p>
    </div>
  );
};

export default ErroMassage;
