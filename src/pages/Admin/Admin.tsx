import { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CreateGroup from '@/components/admin/CreateGroup/CreateGroup';
import GetMembers from '@/components/admin/GetMembers';
import Logo from '@/components/Logo/Logo';
import DisplayGroupData from '@/components/admin/DIsplayGroupData';
import { admin } from '@/styles/admin';
import './admin.scss';

const Admin: FC = () => {
  return (
    <div className={admin.wrapper}>
      <Logo
        modificator='w-[85px] ml-auto mb-[20px]'
        imgModificator='w-[80px] h-[90px]'
      />
      <Tabs className={admin.tabs}>
        <TabList className={admin.tabList}>
          <Tab>Набор в группу</Tab>
          <Tab>Сотрудники</Tab>
          <Tab>График работы</Tab>
        </TabList>
        <TabPanel className={admin.tabPanel}>
          <CreateGroup />
          <DisplayGroupData />
          <GetMembers />
        </TabPanel>
        <TabPanel>
          <h2>Create Employee</h2>
        </TabPanel>
        <TabPanel>
          <h2>Create Schedule</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Admin;
