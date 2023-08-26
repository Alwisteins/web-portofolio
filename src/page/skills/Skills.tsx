import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import 'react-tabs/style/react-tabs.css';
//import NavSkill from "../../component/navbar/NavSkill";
import {
  language,
  framework,
  library,
  DBMS,
  Card,
} from "../../component/card/Card";

export default function Skill() {
  return (
    <div>
      <h1 className="font-semibold text-base sm:text-2xl relative text-center top-40 sm:top-20">
        My Skills
      </h1>
      <Tabs className={`relative top-40 sm:top-24`}>
        <TabList className={`flex text-right mt-2 font-medium text-sm sm:mr-4 justify-center space-x-6`}>
          <Tab>Language</Tab>
          <Tab>Framework</Tab>
          <Tab>Library</Tab>
          <Tab>DBMS</Tab>
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
