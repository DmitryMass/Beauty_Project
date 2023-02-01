import { FC } from 'react';
import { admin } from '@/styles/admin';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './admin.scss';
import CreateGroup from '@/components/admin/CreateGroup/CreateGroup';
import DIsplayGroupData from '@/components/admin/DIsplayGroupData';
import GetMembers from '@/components/admin/GetMembers';

const Admin: FC = () => {
  return (
    <div className={admin.wrapper}>
      <Tabs className={admin.tabs}>
        <TabList className='mb-[40px]'>
          <Tab>Create Group "Study"</Tab>
          <Tab>Create Employee</Tab>
          <Tab>Create Schedule</Tab>
        </TabList>
        <TabPanel className='max-w-[450px] w-full mx-auto'>
          <CreateGroup />
          <DIsplayGroupData />
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
