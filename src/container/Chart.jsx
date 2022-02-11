import { LineChart, Line, Tooltip, XAxis, YAxis, Legend } from 'recharts';
const data = [
  { name: '2022-02-05' },
  { name: '2022-02-06', master: 6141, beginner: 0 },
  { name: '2022-02-07', master: 6213, beginner: 0 },
  { name: '2022-02-08', master: 5394, beginner: 599 },
  { name: '2022-02-09', master: 7571, beginner: 431 },
  { name: '2022-02-10', master: 4500, beginner: 609 },
  { name: '2022-02-11', master: 6583, beginner: 623 },
  { name: '2022-02-12' },
  { name: '2022-02-13' },
];

const MainLineChart = () => (
  <LineChart width={960} height={300} data={data}>
    <Line
      type="monotone"
      dataKey="master"
      stroke="red"
      strokeWidth={3}
      dot={{ stroke: 'red', strokeWidth: 2 }}
    />
    <Line
      type="monotone"
      dataKey="beginner"
      stroke="green"
      strokeWidth={3}
      dot={{ stroke: 'green', strokeWidth: 2 }}
    />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
);

export default MainLineChart;
