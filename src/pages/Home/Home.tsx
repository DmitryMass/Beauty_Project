import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import 'react-datepicker/dist/react-datepicker.css';

import './home.scss';

const Home: FC = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 14)
  );

  console.log(startDate);
  let handleColor = (time: Date) => {
    if ((time.getHours() >= 0 && time.getHours() < 8) || time.getHours() > 18) {
      return 'text-red';
    }
    return 'text-green';
  };

  const date = new Date();
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        minDate={date}
        // maxDate={addDay(date.)}
        minTime={setHours(setMinutes(new Date(), 0), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 18)}
        timeFormat='HH:mm'
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 8),
          setHours(setMinutes(new Date(), 0), 10),
          setHours(setMinutes(new Date(), 0), 12),
          setHours(setMinutes(new Date(), 0), 14),
          setHours(setMinutes(new Date(), 0), 16),
          setHours(setMinutes(new Date(), 0), 18),
        ]}
        timeClassName={handleColor}
        timeIntervals={120}
        showTimeSelect
        dateFormat='MMMM d, yyyy'
      />
    </div>
  );
};

export default Home;
