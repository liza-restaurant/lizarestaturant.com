import { useState } from "react";

function Input({ textarea, defaultValue, options, ...props }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="input flex">
      {options ? (
        <select>
          {options.map((o, idx) => (
            <option disabled={!o.value} value={o} key={idx}>
              {o.label}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}

export default Input;
