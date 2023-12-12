import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import { web, CardProject } from "../../component/card/CardProject";

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0); // State awal diatur ke indeks 0
  const tabListName: string[] = ["Web", "API", "CLI"];
  const tabPanelList: JSX.Element[] = [
    <h1>
      <CardProject data={web} />
    </h1>,
    <h1>Tab 1</h1>,
    <h1>Tab 2</h1>,
  ];

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
          {tabListName.map((name, index) => (
            <Tab
              key={index}
              className={`px-5 py-2 sm:px-8 cursor-pointer rounded-t border-b-2 border-b-sec-gray ${
                activeTab === index ? "text-sec-blue bg-sec-gray" : ""
              }`}
            >
              {name}
            </Tab>
          ))}
        </TabList>

        {tabPanelList.map((element, index) => (
          <TabPanel key={index}>{element}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
