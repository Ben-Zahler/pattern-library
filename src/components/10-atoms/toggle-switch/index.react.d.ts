import React from 'react';

export interface AXAToggleSwitchProps {
  on?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: UIEvent) => void;
}

declare function createAXAToggleSwitch(
  createElement: typeof React.createElement
): React.ComponentType<AXAToggleSwitchProps>;

export default createAXAToggleSwitch;
