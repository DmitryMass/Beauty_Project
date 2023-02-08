export const admin = {
  wrapper: 'max-w-[1240px] w-full mx-auto px-[15px] pb-[60px]',
  tabs: 'flex flex-col justify-center items-center max-w-[1000px]  w-full mx-auto',
  tabList: 'w-full mb-[20px] text-center border-b-[1px] border-gold',
  tabPanel: 'max-w-[800px] w-full mx-auto',
  displayGroupWrapper: 'relative grid grid-cols-1 md:grid-cols-2 gap-[5px] ',
  displayGroupContent:
    'p-[5px] border-[2px] border-goldOpacity rounded-[4px] bg-coal',
  displayGroupType: 'inline-block first-letter:uppercase text-gold',
  membersContainer: 'relative p-[5px] bg-goldOpacity cursor-pointer',
  deleteBtn:
    'text-white absolute z-[20] cursor-grabbing top-[5px] right-[5px] w-[20px] h-[20px]',
  activeContent:
    'flex flex-col overflow-auto h-[150px] opacity-100 transition-all duration-500 border-[1px] border-gold bg-coal rounded-[6px] my-[10px] py-[5px] px-[15px]',
  nonActiveContent:
    'flex flex-col overflow-auto h-0 opacity-0 transition-all duration-500 border-[1px] border-gold bg-coal rounded-[6px]',
};
