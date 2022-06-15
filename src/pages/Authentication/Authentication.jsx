import { useForm } from '../../hooks'
import './Authentication.scss';
import { Input } from '../../components';

const Authentication = () => {

    const {
        isRegister,
        formErrors,
        userData,
        handleInputFieldChange,
        handleUserRegistration,
        handleFormSubmit
    } = useForm();

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
                        inputType='email'
                        placeholder={isRegister ? 'Email adress' : 'Login'}
                        inputName='email'
                        inputValue={userData.email}
                        additionalStyle={!isRegister ? { borderRadius: '.5rem' } : {}}
                        handleInputChange={handleInputFieldChange}
                    />

                    <p className='error-message span-two-column' >{formErrors?.password}</p>
                    
                    <Input
                        classN='input-field span-two-column'
                        inputType='password'
                        placeholder='Password'
                        inputName='password'
                        inputValue={userData.password}
                        additionalStyle={!isRegister ? { borderRadius: '.5rem' } : {}}
                        handleInputChange={handleInputFieldChange}
                    />

                </div>

                <div className="buttons">
                    <button 
                        className='register-button'
                        style={{
                            backgroundColor: `${isRegister ? '#18A0FB' : 'transparent'}`,
                            border: `${isRegister ? 'none' : '1px solid #18A0FB'}`,
                            color: `${isRegister ? '#FFF' : '#18A0FB'}`
                        }}
                        type='button'
                        onClick={handleUserRegistration}
                    >
                        Register
                    </button>

                    {!isRegister && (
                            <button
                                className='login-button'
                                type='submit'
                            >
                                Login
                            </button>
                        )
                    }

                </div>

            </form>
        </section>
    );
};

export default Authentication;
