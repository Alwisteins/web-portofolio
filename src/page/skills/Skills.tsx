import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import {
  language,
  framework,
  library,
  DBMS,
  Card,
} from "../../component/card/Card";

export default function Skill() {
  const [activeTab, setActiveTab] = useState(0); // State awal diatur ke indeks 0
  return (
    <div>
      <h1 className="font-semibold text-base sm:text-2xl relative text-center top-40 sm:top-20">
        My Skills
      </h1>
      <Tabs
        selectedIndex={activeTab} // Tentukan indeks tab yang aktif
        onSelect={(index) => setActiveTab(index)} // Fungsi untuk mengubah indeks tab aktif
        className={`relative top-40 sm:top-24`}
      >
        <TabList
          className={`flex text-right mt-2 font-medium text-sm sm:mr-4 justify-center space-x-2 sm:space-x-8`}
        >
          <Tab className={`px-1 rounded ${activeTab === 0 ? "text-prim-blue bg-sec-gray" : ""}`}>
            Language
          </Tab>
          <Tab className={`px-1 rounded ${activeTab === 1 ? "text-prim-blue bg-sec-gray" : ""}`}>
            Framework
          </Tab>
          <Tab className={`px-1 rounded ${activeTab === 2 ? "text-prim-blue bg-sec-gray" : ""}`}>
            Library
          </Tab>
          <Tab className={`px-1 rounded ${activeTab === 3 ? "text-prim-blue bg-sec-gray" : ""}`}>
            DBMS
          </Tab>
        </TabList>

        <TabPanel>
          <Card name={language} />
        </TabPanel>
        <TabPanel>
          <Card name={framework} />
        </TabPanel>
        <TabPanel>
          <Card name={library} />
        </TabPanel>
        <TabPanel>
          <Card name={DBMS} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
