function Input({ name, className, placeholder }) {
  return (
    <input
      name={name}
      className={className}
      placeholder={placeholder}
      type="text"
    />
  );
}

export default Input;
