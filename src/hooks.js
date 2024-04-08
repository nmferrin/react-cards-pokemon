import { useState } from 'react';

export function useFlip() {
    const [ isFlipped, setIsFlipped ] = useState(true);

    const toggleFlip = () => {
        setIsFlipped(isFlipped => !isFlipped);
    };

    return [isFlipped, toggleFlip];
}