import './Input.scss';

const Input = ({ 
    classN,
    inputType='text',
    inputName,
    inputValue,
    placeholder,
    additionalStyle={},
    handleInputChange
}) => {
    return (
        <input
            className={classN}
            type={inputType}
            placeholder={placeholder}
            name={inputName}
            value={inputValue}
            style={additionalStyle}
            onChange={handleInputChange}
        />
    );
};

export default Input;
