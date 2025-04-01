import React from "react";

interface ControlsProps {
    onPlay: () => void;
    onPause: () => void;
    onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onPlay, onPause, onReset }) => {
    return (
        <div style={{ margin: "11px"}}>
            <button onClick={onPlay}>▶ Play</button>
            <button onClick={onPause}>⏸ Pause</button>
            <button onClick={onReset}>🔄 Reset</button>
        </div>
    );
};

export default Controls;