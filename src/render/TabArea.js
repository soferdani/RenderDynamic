import { useState } from "react";
import GeneralTabLi from "./GeneralTabLi";


export default function TabArea(props) {
    const [activeTab, setActiveTab] = useState('Tab 1')

    const generalTabHandler = (tabName) => {
        setActiveTab(tabName)
    }

    console.log(props.children);

    return ( 
        <div id={props.id} className="Tabs">
            <ul className='nav'>
                {props.children.map((child, index) => {
                    return <GeneralTabLi key={index} content={child.title} pressHandler={generalTabHandler}/>
                })}
            </ul>
            this is ok
            
        </div>
    )
}
