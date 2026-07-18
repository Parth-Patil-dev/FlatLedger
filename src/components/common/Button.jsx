function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white",

    secondary:
      "bg-slate-200 hover:bg-slate-300 text-black",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;