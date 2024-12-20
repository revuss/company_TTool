import { ChevronDown } from "lucide-react";
import { useState } from "react";
import cn from "classnames";

interface OptionsProps {
  id: string;
  val: string;
}

interface DropdownProps {
  options: OptionsProps[];
  label: string;
  defaultValue: string;
  labelStyle?: string;
  showLabel?: boolean;
  onChange: (data: OptionsProps) => void;
}

const Dropdown = ({
  options,
  label,
  defaultValue,
  labelStyle,
  showLabel,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<OptionsProps>();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: OptionsProps) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={cn(
          "inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-75",
          labelStyle
        )}
      >
        {selectedValue
          ? showLabel
            ? label + " : " + selectedValue.val
            : selectedValue.val
          : defaultValue}
        <ChevronDown
          className="w-4 h-4 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />{" "}
      </button>

      {isOpen && (
        <div
          className={cn(
            "origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
            {
              "transition-all duration-1000 ease-in-out opacity-100 transform scale-100":
                isOpen,
              "transition-all duration-1000 ease-in-out opacity-0 transform scale-95":
                !isOpen,
            }
          )}
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="py-1">
            {options.map((option: OptionsProps) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                {option.val}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
