const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        px-5
        py-3
        rounded-lg
        font-semibold
        text-white
        bg-blue-600
        hover:bg-blue-700
        active:bg-blue-800
        transition
        duration-300
        disabled:bg-gray-400
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;