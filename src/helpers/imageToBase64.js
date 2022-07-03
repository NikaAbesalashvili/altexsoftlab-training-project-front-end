export const convertImageToBase64 = async (imageFile) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        
        fileReader.readAsDataURL(imageFile);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        
        fileReader.onerror = (error) => {
            reject(error);
        };

    });
};
