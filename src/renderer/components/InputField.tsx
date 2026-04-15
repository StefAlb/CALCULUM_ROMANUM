import React from 'react';
import { useCalculator } from '@hooks/useCalculator';

/**
 * InputField Component
 * Eingabefeld für römische Zahlen
 */
export const InputField: React.FC = () => {
  const { currentValue, setCurrentValue } = useCalculator();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={currentValue}
      onChange={handleChange}
      placeholder="Römische Zahl eingeben..."
      className="input-field"
    />
  );
};
