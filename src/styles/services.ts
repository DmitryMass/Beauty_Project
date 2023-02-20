export const servicesStyle = {
  activeContent:
    'flex flex-col  h-[250px] opacity-100 transition-all duration-500   my-[10px] px-[30px] max-[576px]:px-[15px]',
  nonActiveContent:
    'flex flex-col h-0 opacity-0 transition-all duration-500 rounded-[6px]',
  loadingWrapper:
    'max-w-[200px] w-full h-full flex justify-center items-center mx-auto',
  serviceContainer:
    'max-w-[1140px] relative w-full h-full mx-auto px-[15px] pt-[130px] max-[576px]:pt-[150px]',
  rightBranch: 'fixed top-0 right-0 max-w-[400px] max-[500px]:max-w-[300px] ',
  leftBranch: 'fixed bottom-0 left-0 max-w-[200px]',
  burgerModificator:
    'w-[85px] h-[85px] absolute top-[15px] right-[30px] justify-end ',
  logoModificator: 'w-[85px] absolute top-[0] right-[30px] max-[992px]:hidden ',
  procedureContainer:
    'w-full text-gold py-[5px] px-[20px] border-b-[1px] border-gold flex justify-between items-center',
  procedureIdx:
    'text-h2 leading-lg text-gold uppercase font-bold max-[576px]:text-md',
  procedureTitle:
    'text-h2 leading-md text-gold font-semibold max-[576px]:text-md',
  optionContainer:
    'flex justify-between items-center py-[10px] border-b-[2px] border-b-gold overflow-hidden gap-[25px] max-[576px]:flex-col max-[576px]:items-start max-[576px]:gap-[10px]',
  optionTitle:
    'text-gold font-semibold text-md leading-m uppercase mb-[5px] max-[768px]:text-sm max-[576px]:text-classic',
  optionSubtitle: 'text-classic leading-s text-white max-[768px]:text-s',
  optionPrice: 'text-white text-s font-bold flex items-end gap-[5px] ',
  optionPriceSpan: 'text-gold font-semibold text-sm leading-sm',
};
