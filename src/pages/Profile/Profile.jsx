import { useState } from 'react';
import { Input, Button } from '../../components';
import { TextArea } from './components';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai';
import './Profile.scss';

const Profile = () => {

    const profileAvatar = require('../../images/profile-avatar.png');
    const apartamentIcon = require('../../images/apartament-icon.png');

    const [userData, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        aboutUser: '',
        photo: '',
    });

    const [userApartamentData, setUserApartamentData] = useState({
        city: '',
        address: '',
        distanceToCenter: '',
        maxNumberOfGuests: '',
        apartamentDescription: '',
        apartamentPhoto: '',
    });

    const [isExpanded, setIsExpanded] = useState(false);

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

    const handleApartamentPhotoupload = async (event) => {
        const image = event.target.files[0];
        const imageBase64 = await convertImageToBase64(image);

        setUserApartamentData((prevData) => ({
            ...prevData,
            apartamentPhoto: imageBase64,
        }));
    };

    const handleApartamentInputFieldChange = (event) => {
        const { name, value } = event.target;

        setUserApartamentData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleApartamentDataSubmit = (event) => {
        event.preventDefault();

        console.log('USER SUBMITED APARTAMENT DATA');
        console.log(userApartamentData);
    };

    return (
        <main>
            <section className='profile-info-section' >
                
                {userData?.photo ? (
                    <div className='image-container' style={{ backgroundImage: userData.photo }} >
                        <img className='picture' src={userData.photo} alt="user-photo" />
                        <button
                            className='delete-button'
                            onClick={() => setUserInfo((prevInfo) => ({ ...prevInfo, photo: '' }))}
                        >
                            Delete <AiFillDelete className='icon' />
                        </button>
                    </div>
                ): (

                    <label htmlFor="profile-photo-input" >

                        <img className='picture' src={profileAvatar} alt="profile-picture" />
                        <input onChange={handleUploadPhoto} type="file" name='photo' id='profile-photo-input' style={{ display: 'none' }} />
                    </label>

                )}
                
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

            <section className="add-apartament-section">
                <h2
                    className='add-apartament-title'
                    onClick={() => setIsExpanded((prevState) => !prevState)}
                >
                    Add an appartament {isExpanded ? <BiUpArrow className='icon' /> : <BiDownArrow className='icon' />}
                </h2>
                {isExpanded && (

                    <form className="apartament-form" onSubmit={handleApartamentDataSubmit} >
                        <div className='apartament-fields' >
                            <Input
                                classN='input-field'
                                placeholder='City'
                                inputName='city'
                                inputValue={userApartamentData.city}
                                rounded={true}
                                handleInputChange={handleApartamentInputFieldChange}
                            />
                            <Input
                                classN='input-field'
                                placeholder='Address'
                                inputName='address'
                                inputValue={userApartamentData.address}
                                rounded={true}
                                handleInputChange={handleApartamentInputFieldChange}
                            />
                            <Input
                                classN='input-field'
                                placeholder='Distance to center'
                                inputType='number'
                                inputName='distanceToCenter'
                                inputValue={userApartamentData.distanceToCenter}
                                rounded={true}
                                handleInputChange={handleApartamentInputFieldChange}
                            />
                            <Input
                                classN='input-field'
                                placeholder='Max number of guests'
                                inputType='number'
                                inputName='maxNumberOfGuests'
                                inputValue={userApartamentData.maxNumberOfGuests}
                                rounded={true}
                                handleInputChange={handleApartamentInputFieldChange}
                            />
                            <TextArea
                                placeholder='Description'
                                textAreaName='apartamentDescription'
                                textAreaValue={userApartamentData.apartamentDescription}
                                handleTextAreaCHange={handleApartamentInputFieldChange}
                            />

                            <Button
                                classN='button'
                                buttonType='submit'
                                isShadowButton={false}
                                buttonText='Save all changes'
                            />
                        </div>

                        {userApartamentData?.apartamentPhoto ? (
                            <div className="image-container">
                                <img className='picture' src={userApartamentData.apartamentPhoto} alt="apartament-photo" />
                                <button
                                    className='delete-button'
                                    onClick={() => setUserApartamentData((prevData) => ({ ...prevData, apartamentPhoto: '' }))}
                                >
                                    Delete <AiFillDelete className='icon' />
                                </button>
                            </div>
                        ) : (

                            <label htmlFor="apartament-photo" >

                                <img className='picture' src={apartamentIcon} alt="profile-picture" />
                                <input onChange={handleApartamentPhotoupload} type="file" name='apartamentPhoto' id='apartament-photo' style={{ display: 'none' }} />
                            </label>

                        )}

                    </form>
                )}
            </section>
        </main>
    );
};

export default Profile;
