import './TabContent.scss';
import React from 'react'
import ReactMarkdown from 'react-markdown';


const TabContent = ({project, activeTab}) => {


  return (
    <div className="tab__container ">
        <div className="tab__content">
            <div className='projectContent'>
                {activeTab === "Languages Used" ? 
                <ul>
                    {project[activeTab].map((language, index) =>
                    <li key={index}
                        id='techStack'>
                        {language}
                    </li>
                )}
                </ul>
                :<ReactMarkdown>{project[activeTab]}</ReactMarkdown>
                }
            </div>
        </div>
    </div>
  )
}

export default TabContent