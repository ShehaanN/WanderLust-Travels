const Button = ({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer"
      >
        {label} {icon}
      </button>
    </>
  );
};

export default Button;
