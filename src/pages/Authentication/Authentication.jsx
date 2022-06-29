import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks'
import { Input, Button } from '../../components';
import './Authentication.scss';

const Authentication = () => {

    const {
        isRegister,
        formErrors,
        userData,
        handleInputFieldChange,
        handleUserRegistration,
        handleFormSubmit
    } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('travel-agency-user-token')) {
            navigate('/search');
        }
    })

    return (
        <section className='form-section' >
            <form
                className="form"
                onSubmit={handleFormSubmit}
            >

                <div className='form-grid' >
                    <h2 className='form-header span-two-column' >
                        { isRegister ? 'Register Now' : 'Login' }
                    </h2>

                    {isRegister && (
                        <>
                            <p className='error-message span-two-column' >{formErrors?.firstLastName}</p>
                            
                            <Input 
                                classN={'input-field'}
                                placeholder='First name'
                                inputName='firstName'
                                inputValue={userData.firstName}
                                handleInputChange={handleInputFieldChange}
                            />
                            
                            <Input
                                classN='input-field'
                                placeholder='Last Name'
                                inputName='lastName'
                                inputValue={userData.lastName}
                                handleInputChange={handleInputFieldChange}
                            />

                        </>
                    )}

                    <p className='error-message span-two-column' >{formErrors?.email}</p>
                    
                    <Input
                        classN='input-field span-two-column'
                        inputType={isRegister ? 'email' : 'text'}
                        placeholder={isRegister ? 'Email adress' : 'Login'}
                        inputName={`${isRegister ? 'email' : 'login'}`}
                        inputValue={isRegister ? userData.email : userData.login}
                        rounded={!isRegister}
                        handleInputChange={handleInputFieldChange}
                    />

                    <p className='error-message span-two-column' >{formErrors?.password}</p>
                    
                    <Input
                        classN='input-field span-two-column'
                        inputType='password'
                        placeholder='Password'
                        inputName='password'
                        inputValue={userData.password}
                        rounded={!isRegister}
                        handleInputChange={handleInputFieldChange}
                    />

                </div>

                <div className="buttons">

                    <Button 
                        classN='button'
                        buttonType='button'
                        isShadowButton={!isRegister}
                        buttonText='Register'
                        handleClick={handleUserRegistration}
                    />

                    {!isRegister && (

                            <Button
                                classN='button'
                                buttonType='submit'
                                buttonText='Login'
                            />
                        )
                    }

                </div>

            </form>
        </section>
    );
};

export default Authentication;
