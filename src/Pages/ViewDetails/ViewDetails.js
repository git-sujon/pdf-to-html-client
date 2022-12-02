import React from 'react';
import ProfileSection from './ProfileSection';
import SelectedSection from './SelectedSection';


const ViewDetails = () => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <ProfileSection></ProfileSection>
            <SelectedSection></SelectedSection>
        </div>
    );
};

export default ViewDetails;