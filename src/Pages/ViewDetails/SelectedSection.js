import React from 'react';

const SelectedSection = ({userDetails}) => {
    let count = 1
    console.log(userDetails.skills)
    return (
        <div>
            <div className='p-2 border-2 border-gray-200 h-44'>
                <h2 className='font-semibold text-medium text-gray-900 '>Selected Skills</h2>
                <div className=' border-2 border-gray-200 '>
                    <ol className='pl-2 h-32 overflow-auto '  >
                    {
                       userDetails?.skills && userDetails?.skills.map((skill,idx )=>  skill && <li>{count++} {skill}</li>)
                    }
                    </ol>

                </div>
            </div>
        </div>
    );
};

export default SelectedSection;