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
      title: '마스터 6141',
    },
    {
      start: new Date('2022-02-07'),
      end: new Date('2022-02-07'),
      title: '마스터 6213',
    },
    {
      start: new Date('2022-02-08'),
      end: new Date('2022-02-08'),
      title: '마스터 5394',
    },
    {
      start: new Date('2022-02-08'),
      end: new Date('2022-02-08'),
      title: '초보자 599',
    },
    {
      start: new Date('2022-02-09'),
      end: new Date('2022-02-09'),
      title: '마스터 7571',
    },
    {
      start: new Date('2022-02-09'),
      end: new Date('2022-02-09'),
      title: '초보자 431',
    },
    {
      start: new Date('2022-02-10'),
      end: new Date('2022-02-10'),
      title: '마스터 2358',
    },
    {
      start: new Date('2022-02-10'),
      end: new Date('2022-02-10'),
      title: '초보자 602',
    },
    {
      start: new Date('2022-02-11'),
      end: new Date('2022-02-09'),
      title: '마스터 5410',
    },
    {
      start: new Date('2022-02-11'),
      end: new Date('2022-02-11'),
      title: '초보자 623',
    },
  ];
  return (
    <Calendar
      localizer={localizer}
      defaultDate={new Date()}
      events={events}
      defaultView="month"
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
};

export default MainCalendar;
