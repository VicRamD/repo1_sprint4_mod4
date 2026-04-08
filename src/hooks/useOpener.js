import { useState } from "react";

export const useOpener = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    return {open, close, toggle, isOpen};
}