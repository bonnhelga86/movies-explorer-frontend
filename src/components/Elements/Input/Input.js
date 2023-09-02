function Input({ name, className, placeholder='', id, inputType }) {
  return (
    <input
      name={name}
      className={className}
      placeholder={placeholder}
      type={inputType}
      id={id}
    />
  );
}

export default Input;
