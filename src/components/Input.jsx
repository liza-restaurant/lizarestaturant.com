function Input({ textarea, ...props }) {
  return (
    <div className="input flex">
      {textarea ? (
        <textarea {...props}></textarea>
      ) : (
        <input type="text" {...props} />
      )}
    </div>
  );
}

export default Input;
