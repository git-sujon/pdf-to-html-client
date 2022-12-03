import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import SelectedSection from './SelectedSection';


const ViewDetails = ({userDetails}) => {
   
    return (
        <div>
             <h3 className='text-medium font-semibold text-red-500 text-center'>View Details</h3>
            <div className='grid grid-cols-2 gap-3 my-10'>
               
            <ProfileSection></ProfileSection>
            <SelectedSection userDetails={userDetails}></SelectedSection>
        </div>
        </div>
     
    );
};

export default ViewDetails;