import * as React from 'react';

const ColorButton = () => {
  const [buttonColor, setButtonColor] = React.useState<string>('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const onClick = () => {
    setButtonColor(newButtonColor);
  };
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: buttonColor }}>
        Change to {newButtonColor}
      </button>
    </div>
  );
};

export default ColorButton;
