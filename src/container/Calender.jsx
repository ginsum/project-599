import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MainCalendar = (props) => {
  const events = [
    {
      start: new Date('2022-02-06'),
      end: new Date('2022-02-06'),
      title: '줄넘기 마스터 6141',
    },
    {
      start: new Date('2022-02-07'),
      end: new Date('2022-02-07'),
      title: '줄넘기 마스터 6213',
    },
    {
      start: new Date('2022-02-08'),
      end: new Date('2022-02-08'),
      title: '줄넘기 마스터 5394',
    },
    {
      start: new Date('2022-02-08'),
      end: new Date('2022-02-08'),
      title: '초보자 599',
    },
  ];
  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        events={events}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MainCalendar;
