import { useState } from 'react';
import './Form.scss';

const Form = () => {
    
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('FORM SUBMITED');
    };

    const handleUserRegister = () => {
        if(!isRegister) return setIsRegister(true);

        console.log('REGISTRING USER');
    };
    
    return (
        <section className='form-section' >
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <h2 className='form-header' >
                    { isRegister ? 'Register Now' : 'Login' }
                </h2>

                <div className='form-grid' >
                    {isRegister && (
                        <>
                            <input
                                className='input-field'
                                type="text"
                                placeholder='First name'
                                style={{
                                    borderRadius: `${isRegister ? '0' : '.5rem'}`
                                }}
                            />
                            <input
                                className='input-field'
                                type="text"
                                placeholder='Last name'
                                style={{
                                    borderRadius: `${isRegister ? '0' : '.5rem'}`
                                }}
                            />
                        </>
                    )}
                    <input
                        className="input-field span-two-column"
                        type="email"
                        placeholder={isRegister ? 'Email address' : 'Login'}
                        style={{
                            borderRadius: `${isRegister ? '0' : '.5rem'}`
                        }}
                    />
                    <input
                        className="input-field span-two-column"
                        type="password"
                        placeholder={isRegister ? 'Create password' : 'Password'}
                        style={{
                            borderRadius: `${isRegister ? '0' : '.5rem'}`
                        }}
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
                        onClick={handleUserRegister}
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

export default Form;
