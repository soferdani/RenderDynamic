import { useState } from "react";
import GeneralTabContent from "./GeneralTabContent";
import GeneralTabLi from "./GeneralTabLi";



export default function Tabs({ className, id, children }) {
    const [activeTab, setActiveTab] = useState('Tab 1')


    const generalTabHandler = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div id={id} className="Tabs">
            <ul className="nav">
                <GeneralTabLi pressHandler={generalTabHandler} content="Tab 1" />
                <GeneralTabLi pressHandler={generalTabHandler} content="Tab 2" />
                <GeneralTabLi pressHandler={generalTabHandler} content="Tab 3" />

            </ul>
            <div className="outlet">
                {activeTab === "Tab 1" ? <GeneralTabContent content='First Tab!! Hurray!!' /> :  <GeneralTabContent content='Second Tab!! Hurray!!' />}
            </div>
        </div>
    );
}