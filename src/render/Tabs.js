import { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab"

export default function Tab({ className, style, id, children }) {
    const [activeTab, setActiveTab] = useState('tab1')

    const handleTab1 = () => {
        setActiveTab('tab1')
    }

    const handleTab2 = () => {
        setActiveTab('tab2')
    }

    return (
        <div id={id} className="Tabs" style={style}>
            {/* Tab nav */}
            <ul className="nav">
                <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1} >Tab 1</li>
                <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2} >Tab 2</li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    );
}