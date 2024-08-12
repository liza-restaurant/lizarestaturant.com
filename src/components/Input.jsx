import { useState } from "react";

function Input({ textarea, defaultValue, options, onChange, ...props }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    if (typeof onChange === "function") onChange(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="input flex">
      {options ? (
        <select onChange={handleChange}>
          {options.map((o, idx) => (
            <option disabled={!o.value} value={o.value} key={idx}>
              {o.label}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea {...props} value={value} onChange={handleChange}></textarea>
      ) : (
        <input type="text" {...props} value={value} onChange={handleChange} />
      )}
    </div>
  );
}

export default Input;
