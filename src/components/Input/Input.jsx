import './Input.scss';

const Input = ({ 
    classN,
    inputType = 'text',
    max = null,
    min = null,
    inputName,
    inputValue,
    placeholder,
    rounded = false,
    handleInputChange
}) => {
    return (
        <input
            className={classN}
            type={inputType}
            max={max}
            min={min}
            placeholder={placeholder}
            name={inputName}
            value={inputValue}
            style={rounded ? {
                borderRadius: '.5rem',
            } : {}}
            onChange={handleInputChange}
        />
    );
};

export default Input;
