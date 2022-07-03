import { useAddApartament, useUserProfileEdit } from '../../hooks';
import { Input, Button } from '../../components';
import { TextArea } from './components';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai';
import profileAvatar from '../../images/profile-avatar.png';
import apartamentIcon from '../../images/apartament-icon.png'
import './Profile.scss';

const Profile = () => {

    // Extractiog user data and functions for editing user profile from useUserProfileEdit
    const {
        userData,
        handleUserProfileFormSubmit,
        handleUserInputChange,
        handleUserProfilePictureUpload,
        handleUserProfilePictureDelete,
    } = useUserProfileEdit();

    // Extracting apartament data and functions, for adding new apartament, from useAddApartament
    const {
        userApartamentData,
        isExpanded,
        toggleApartamentExpand,
        handleApartamentDataSubmit,
        handleApartamentInputFieldChange,
        handleApartamentImageChoose,
        handleApartamentImageDelete,
    } = useAddApartament();

    return (
        <main>
            <section className='profile-info-section' >
                
                {userData?.photo ? (
                    <div className='image-container' style={{ backgroundImage: userData.photo }} >
                        <img className='picture' src={userData.photo} alt="user-photo" />
                        <button
                            className='delete-button'
                            onClick={handleUserProfilePictureDelete}
                        >
                            Delete <AiFillDelete className='icon' />
                        </button>
                    </div>
                ) : (

                    <label htmlFor="profile-photo-input" >

                        <img className='picture' src={profileAvatar} alt="profile-picture" />
                        <input onChange={handleUserProfilePictureUpload} type="file" name='photo' id='profile-photo-input' style={{ display: 'none' }} />
                    </label>

                )}
                
                <form
                    className='user-profile-form'
                    onSubmit={handleUserProfileFormSubmit}
                >
                    <Input
                        classN='input-field'
                        inputType='text'
                        placeholder='First name'
                        inputName='firstName'
                        inputValue={userData.firstName}
                        rounded={true}
                        handleInputChange={handleUserInputChange}
                    />

                    <Input
                        classN='input-field'
                        inputType='text'
                        placeholder='Last name'
                        inputName='lastName'
                        inputValue={userData.lastName}
                        rounded={true}
                        handleInputChange={handleUserInputChange}
                    />

                    <Input
                        classN='input-field span-two-column'
                        inputType='email'
                        placeholder='Email'
                        inputName='email'
                        inputValue={userData.email}
                        rounded={true}
                        handleInputChange={handleUserInputChange}
                    />
                    <div className='span-two-column' >
                        <TextArea
                            placeholder='Something about yourself'
                            textAreaName='description'
                            textAreaValue={userData.description}
                            handleTextAreaCHange={handleUserInputChange}
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
                    onClick={toggleApartamentExpand}
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
                                max={10}
                                min={0}
                                inputName='distanceToCenter'
                                inputValue={userApartamentData.distanceToCenter}
                                rounded={true}
                                handleInputChange={handleApartamentInputFieldChange}
                            />

                            <Input
                                classN='input-field'
                                placeholder='From - to'
                                inputName='date'
                                inputValue={userApartamentData.date}
                                rounded={true}
                                handleInputChange={handleApartamentInputFieldChange}
                            />

                            <Input
                                classN='input-field'
                                placeholder='Max number of guests'
                                inputType='number'
                                max={10}
                                min={1}
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

                        {userApartamentData?.imageBase64 ? (
                            <div className="image-container">
                                <img className='picture' src={userApartamentData.imageBase64} alt="apartament-photo" />
                                <button
                                    className='delete-button'
                                    onClick={handleApartamentImageDelete}
                                >
                                    Delete <AiFillDelete className='icon' />
                                </button>
                            </div>
                        ) : (

                            <label htmlFor="apartament-photo" >

                                <img className='picture' src={apartamentIcon} alt="profile-picture" />
                                <input onChange={handleApartamentImageChoose} type="file" name='apartamentPhoto' id='apartament-photo' style={{ display: 'none' }} />
                            </label>

                        )}

                    </form>
                )}
            </section>
        </main>
    );
};

export default Profile;
