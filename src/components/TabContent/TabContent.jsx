import './TabContent.scss';


import React from 'react'

const TabContent = ({project, activeTab}) => {


  return (
    <div className="tab__container ">
        <div className="tab__content">
            <div>
                {activeTab == "Languages Used" ? 
                <ul>
                    {project[activeTab].map((language, index) =>
                    <li key={index}
                        className='techStack'>
                        {language}
                    </li>
                )}
                </ul>
                :<p>{project[activeTab]}</p>
                }
            </div>
        </div>
    </div>
  )
}

export default TabContent