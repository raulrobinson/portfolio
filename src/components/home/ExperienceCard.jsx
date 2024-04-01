import React from 'react';

const ExperienceCard = ({ data }) => {
    return (
        <div className="pb-0 text-center">
            <img className="bg-white mb-3" src={data.companylogo} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <p className="experiences-title">
                {data.role}
            </p>
            <p className="experiences-date">
                {data.date}
            </p>
        </div>
    )
};

export default ExperienceCard;
