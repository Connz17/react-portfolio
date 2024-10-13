import './TabContent.scss';


import React from 'react'

const TabContent = ({project, activeTab}) => {


  return (
    <div className="tab__container ">
        <div className="tab__content">
            <div>
                <p>{project[activeTab]}</p>
            </div>
        </div>
    </div>
  )
}

export default TabContent