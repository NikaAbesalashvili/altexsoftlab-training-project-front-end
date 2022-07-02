import { useState } from 'react';
import { Input, Button } from '../../components';
import { TextArea } from './components';
import './Profile.scss';

const Profile = () => {

    const profileAvatar = require('../../images/profile-avatar.png');

    const [userData, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        aboutUser: '',
        photo: '',
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log('USER MADE CHANGES');
        console.log(userData);
    };

    const handleChange = (event) => {

        const { name, value } = event.target;

        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const convertImageToBase64 = async (imageFile) => {
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

    const handleUploadPhoto = async (event) => {

        const image = event.target.files[0];

        const imageBase64 = await convertImageToBase64(image);

        setUserInfo((prevInfo) => ({
            ...prevInfo,
            photo: imageBase64,
        }));
    };

    return (
        <main>
            <section className='profile-info-section' >
                <label htmlFor="type-file" >

                    <img className='profile-picture' src={userData.photo ? userData.photo : profileAvatar} alt="profile-picture" />
                    <input onChange={handleUploadPhoto} type="file" name='photo' id='type-file' style={{ display: 'none' }} />
                </label>
                
                <form
                    className='user-profile-form'
                    onSubmit={handleFormSubmit}
                >
                    <Input
                        classN='input-field'
                        inputType='text'
                        placeholder='First name'
                        inputName='firstName'
                        inputValue={userData.firstName}
                        rounded={true}
                        handleInputChange={handleChange}
                    />

                    <Input
                        classN='input-field'
                        inputType='text'
                        placeholder='Last name'
                        inputName='lastName'
                        inputValue={userData.lastName}
                        rounded={true}
                        handleInputChange={handleChange}
                    />

                    <Input
                        classN='input-field span-two-column'
                        inputType='email'
                        placeholder='Email'
                        inputName='email'
                        inputValue={userData.email}
                        rounded={true}
                        handleInputChange={handleChange}
                    />
                    <div className='span-two-column' >
                        <TextArea
                            placeholder='Something about yourself'
                            textAreaName='aboutUser'
                            textAreaValue={userData.aboutUser}
                            handleTextAreaCHange={handleChange}
                        />
                    </div>

                    <Button
                        classN='button'
                        buttonType='submit'
                        buttonText='Save changes'
                    />
                </form>
            </section>
        </main>
    );
};

export default Profile;
