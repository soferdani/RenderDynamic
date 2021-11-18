import { useState } from "react";


export default function TabArea({ id, children }) {
    const [activeTab, setActiveTab] = useState('Tab 1')


    return (
        <div id={id} className="Tabs">
            this is ok
        </div>
    )
}
