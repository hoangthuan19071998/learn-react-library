import { createContext, useContext, useState } from "react";


interface ToggleContextType {
    on: boolean;
    toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

function useToggleContext() {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error('Các component con phải được sử dụng bên trong component Toggle');
    }
    return context;
}

interface ToggleProps {
    on?: boolean;
    children: ReactNode;
}

function Toggle({ on: defaultOn = false, children }: ToggleProps) {

    const [on, setOn] = useState(defaultOn)

    const toggle = () => { setOn(prev => !prev) }
    const value = { on, toggle }

    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    )
}

// 3. Các Component Con
import type { ReactNode } from "react";

Toggle.On = function ToggleOn({ children }: { children: ReactNode }) {
    const { on } = useToggleContext();
    return on ? children : null;
};

Toggle.Off = function ToggleOff({ children }: { children: ReactNode }) {
    const { on } = useToggleContext();
    return on ? null : children;
};

Toggle.Button = function ToggleButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { on, toggle } = useToggleContext();
    return (
        <button onClick={toggle} {...props}>
            {on ? 'Tắt' : 'Bật'}
        </button>
    );
};

export default Toggle 