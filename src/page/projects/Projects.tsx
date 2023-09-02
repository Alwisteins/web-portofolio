import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import { web, CardProject } from "../../component/card/CardProject";

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0); // State awal diatur ke indeks 0
  return (
    <div>
      <h1 className="font-semibold text-base sm:text-2xl relative text-center top-40 sm:top-20">
        My Projects
      </h1>
      <Tabs
        selectedIndex={activeTab} // Tentukan indeks tab yang aktif
        onSelect={(index) => setActiveTab(index)} // Fungsi untuk mengubah indeks tab aktif
        className={`relative top-40 sm:top-24`}
      >
        <TabList
          className={`flex text-right mt-2 font-medium text-sm sm:text-base sm:mr-4 justify-center space-x-2 sm:space-x-0`}
        >
          <Tab
            className={`px-5 py-2 sm:px-8 cursor-pointer rounded-t border-b-2 border-b-sec-gray ${
              activeTab === 0 ? "outline-0 bg-sec-gray border-b-sec-blue" : ""
            }`}
          >
            Web
          </Tab>
          <Tab
            className={`px-5 py-2 sm:px-8 cursor-pointer rounded-t border-b-2 border-b-sec-gray ${
              activeTab === 1 ? "outline-0 bg-sec-gray border-b-sec-blue" : ""
            }`}
          >
            API
          </Tab>
          <Tab
            className={`px-5 py-2 sm:px-8 cursor-pointer rounded-t border-b-2 border-b-sec-gray ${
              activeTab === 2 ? "outline-0 bg-sec-gray border-b-sec-blue" : ""
            }`}
          >
            CLI
          </Tab>
        </TabList>

        <TabPanel>
          <h1><CardProject data={web} /></h1>
        </TabPanel>
        <TabPanel>
          <h1>tab 2</h1>
        </TabPanel>
        <TabPanel>
          <h1>tab 3</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
}
