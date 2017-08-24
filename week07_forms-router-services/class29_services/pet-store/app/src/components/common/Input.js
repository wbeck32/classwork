import React from 'react';

export function TextInput({ label, prop, value, onChange }) {
  return (
    <div>
      <label>{label}
        <input name={prop} value={value} onChange={onChange} /> 
      </label>
    </div>
  );
}

export function NumberInput({ label, prop, value, onChange }) {
  return (
    <div>
      <label>{label}
        <input type="range" min="0" max="8" name={prop} value={value} onChange={onChange} /> 
        {value}
      </label>
    </div>
  );
}

export function CheckboxInput({ label, prop, value, onChange }) {
  return (
    <div>
      <label>{label}
        <input type="checkbox" name={prop} checked={value} onChange={onChange} /> 
      </label>
    </div>
  );
}