import './Button.scss';

const Button = ({
    classN,
    buttonType,
    isShadowButton = false,
    handleClick = null,
    buttonText,
}) => {
    return (
        <button
            className={classN}
            type={buttonType}
            style={isShadowButton ? {
                backgroundColor: 'transparent',
                border: '1px solid #18A0FB',
                color: '#18A0FB',
            } : {}}
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
};

export default Button;
