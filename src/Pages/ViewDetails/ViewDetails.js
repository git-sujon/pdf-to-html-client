import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import SelectedSection from './SelectedSection';


const ViewDetails = ({userDetails}) => {
   
    return (
        <div className='relative top-10 mx-auto   bg-white w-4/6 px-20 py-10'>
             <h3 className='text-medium font-semibold text-red-500 text-center'>View Details</h3>
            <div className='grid grid-cols-2 gap-3 my-10'>
               
            <ProfileSection></ProfileSection>
            <SelectedSection userDetails={userDetails}></SelectedSection>
        </div>
        </div>
     
    );
};

export default ViewDetails;