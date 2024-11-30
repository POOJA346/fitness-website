import React, { useState } from 'react';


const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiClass, setBmiClass] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
      classifyBMI(bmiValue);
    } else {
      setBmi(null);
      setBmiClass('');
    }
  };

  const classifyBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiClass('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiClass('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiClass('Overweight');
    } else {
      setBmiClass('Obesity');
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>

      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight in kg"
        />
      </div>

      <div className="input-container">
        <label>Height (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height in meters"
        />
      </div>

      <button onClick={calculateBMI} className="explore-button">
        Calculate BMI
      </button>

      {bmi && (
        <div className="result-container">
          <h3>Your BMI: {bmi}</h3>
          <h4>Classification: {bmiClass}</h4>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
