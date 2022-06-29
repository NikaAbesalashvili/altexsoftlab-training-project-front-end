import './Input.scss';

const Input = ({ 
    classN,
    inputType = 'text',
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
