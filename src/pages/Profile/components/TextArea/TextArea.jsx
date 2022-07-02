import './TextArea.scss';

const TextArea = ({
    placeholder,
    textAreaName,
    textAreaValue,
    handleTextAreaCHange,
}) => {
    return (
        <textarea
            className='text-area span-two'
            placeholder={placeholder}
            name={textAreaName}
            value={textAreaValue}
            onChange={handleTextAreaCHange}
        >

        </textarea>
    );
};

export default TextArea;
