import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
    options: string[];
    selected?: string; // Optional if using custom trigger or just a menu
    onSelect: (value: string) => void;
    trigger?: React.ReactNode; // Custom trigger element
    className?: string;
    width?: string;
}

const CustomDropdown: React.FC<DropdownProps> = ({ 
    options, 
    selected, 
    onSelect, 
    trigger,
    className = "",
    width = "w-40"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {trigger ? (
                    trigger
                ) : (
                    <button
                        type="button"
                        className="flex items-center space-x-2 bg-theme-surface border border-theme-border/50 text-theme-text text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary/50 transition-all hover:bg-theme-surface/80"
                    >
                        <span>{selected}</span>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>
            
            {isOpen && (
                <div className={`absolute right-0 mt-2 ${width} bg-theme-surface border border-theme-border rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200`}>
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => {
                                onSelect(option);
                                setIsOpen(false);
                            }}
                            className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${selected === option ? 'bg-theme-icon text-white font-semibold' : 'text-theme-text hover:bg-theme-text/5 hover:text-theme-icon'}`}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
