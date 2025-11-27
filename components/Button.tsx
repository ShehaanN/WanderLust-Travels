type ButtonProps = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const Button = ({
  label,
  icon,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`inline-flex justify-center items-center bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
      >
        {label}
        {icon && <span className="flex items-center">{icon}</span>}
      </button>
    </>
  );
};

export default Button;
