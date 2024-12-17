interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({ label, onClick, className, disabled }: ButtonProps) {
  const defaultClassName =
    "p-2  bg-green-600 text-white font-medium rounded-md w-full hover:bg-green-700 ease-in-out transition-color duration-300";
  const mergedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;
  return (
    <button onClick={onClick} className={mergedClassName} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
