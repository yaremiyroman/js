const Cell = ({ value, rowIndex, colIndex, handleCellClick }) => {
  const cellValue = !value ? `${rowIndex}-${colIndex}` : value;

  return (
    <div
      className={`
        field
        ${!!value ? 'clicked' : ''}
        ${!!value ? `clicked-${value}` : ''}
      `}
      onClick={() => handleCellClick(rowIndex, colIndex)}
    >
      {cellValue}
    </div>
  );
};

export default Cell;
