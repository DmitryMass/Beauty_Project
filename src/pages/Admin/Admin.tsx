import { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//
import CreateGroup from '@/components/admin/CreateGroup/CreateGroup';
import GetMembers from '@/components/admin/GetMembers';
import Logo from '@/components/Logo/Logo';
import DisplayGroupData from '@/components/admin/DIsplayGroupData';
import CreateEmployee from '@/components/admin/CreateEmployee/CreateEmployee';
import DisplayEmployees from '@/components/admin/DisplayEmployees';
//
import 'react-tabs/style/react-tabs.css';
import { admin } from '@/styles/admin';
import './admin.scss';
import GetEmployee from '@/components/admin/GetEmployee';
import DisplayClients from '@/components/admin/DisplayClients';

const Admin: FC = () => {
  return (
    <div className='w-full h-full bg-coal'>
      <div className={admin.wrapper}>
        <Logo
          modificator='w-[85px] ml-auto mb-[20px]'
          imgModificator='w-[80px] h-[90px]'
        />
        <Tabs className={admin.tabs}>
          <TabList className={admin.tabList}>
            <Tab>Навчання</Tab>
            <Tab>Співробітники</Tab>
            <Tab>Графіки роботи</Tab>
            <Tab>Клієнти</Tab>
          </TabList>
          <TabPanel className={admin.tabPanel}>
            <CreateGroup />
            <DisplayGroupData />
            <GetMembers />
          </TabPanel>
          <TabPanel className={admin.tabPanel}>
            <CreateEmployee />
            <DisplayEmployees />
          </TabPanel>
          <TabPanel className={admin.tabPanel}>
            <GetEmployee />
          </TabPanel>
          <TabPanel className={admin.tabPanel}>
            <DisplayClients />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
