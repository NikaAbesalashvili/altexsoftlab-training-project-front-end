import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks';
import { Input, Button, Apartments } from '../../components';

import './Search.scss';

const Search = () => {

    const {
        locationData,
        apartments,
        handleInputFieldChange,
        handleSearchSubmit,
    } = useSearch();
    
    const naviagte = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('travel-agency-user')) {
            naviagte('/auth');
        }
    }, [])

    return (
        <main>
            <section className='search-section' >
                <form
                    className='search-form'
                    onSubmit={handleSearchSubmit}
                >
                    <h1 className='search-title' >Find Appartament</h1>
                    <div className='search-components' >

                        <Input
                            classN='input-field'
                            placeholder='Search location'
                            inputName='city'
                            inputValue={locationData.city}
                            rounded={true}
                            handleInputChange={handleInputFieldChange}
                        />
                        <Input
                            classN='input-field'
                            placeholder='Check in - Check out'
                            inputName='date'
                            inputValue={locationData.date}
                            inputType='text'
                            rounded={true}
                            handleInputChange={handleInputFieldChange}
                        />
                        <Button
                            classN='button'
                            buttonType='submit'
                            buttonText='Search'
                        />

                    </div>
                </form>
            </section>
            {apartments?.length > 0 && <Apartments apartments={apartments} />}
        </main>
    );
};

export default Search;
