import { useState } from "react";
import GeneralTabContent from "./GeneralTabContent";
import GeneralTabLi from "./GeneralTabLi";
export default function Tabs({data}) {
    const [activeTab, setActiveTab] = useState(null)


    const generalTabHandler = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div id={data.id} className="Tabs">
            <ul className="nav">
                {data.children.map((child, index) => {
                    return <GeneralTabLi key={index} data={child} generalTabHandler={generalTabHandler} />
                })}

            </ul>
            <div className="outlet">
                
                {activeTab && <GeneralTabContent content={activeTab} />}

                {data.children.map((child, index) => {
                    if (child.components.length > 0) {
                        return (
                            <div key={index}>this </div>
                        )
                    }
                })}
                
            </div>
        </div>
    );
}