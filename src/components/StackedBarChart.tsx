import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  {
    date: 'March 20',
    Outgoing: 4000,
    Incoming: 2400,
    amt: 100,
  },
  {
    date: 'March 21',
    Outgoing: 3000,
    Incoming: 1398,
    amt: 300,
  },
  {
    date: 'March 22',
    Outgoing: 2000,
    Incoming: 9800,
    amt: 130,
  },
  {
    date: 'March 23',
    Outgoing: 2780,
    Incoming: 3908,
    amt: 45,
  },
  {
    date: 'March 24',
    Outgoing: 1890,
    Incoming: 4800,
    amt: 180,
  },
  {
    date: 'March 25',
    Outgoing: 2390,
    Incoming: 3800,
    amt: 21,
  },
  {
    date: 'March 26',
    Outgoing: 2390,
    Incoming: 3800,
    amt: 21,
  },
];

const CustomTooltip = () => {
  return (
    <ToolTipContainer>
      <Diagrams></Diagrams>
    </ToolTipContainer>
  );
};

const Diagrams = styled.div`
  height: 50%;
  width: 100%;

  background-color: #111111;
  border-bottom: 1px solid #333;
`;

const ToolTipContainer = styled.div`
  width: 300px;
  height: 250px;

  outline: 1px solid #333;
  background-color: #000000;

  left: 692px;
  top: 72px;
  transform: translate3d(-50%, -100%, 0px);
`;

interface TableDiagramProps {}

export default class TableDiagram extends PureComponent<TableDiagramProps> {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} style={{ position: 'relative' }}>
          {data.map(element => (
            <XAxis dataKey={'date'} />
          ))}
          {data.map(element => (
            <YAxis />
          ))}

          <Tooltip content={<CustomTooltip />} allowEscapeViewBox={{ y: true }} />
          <Legend />
          <Bar dataKey="Outgoing" stackId="a" fill="#0070f3" />
          <Bar dataKey="Incoming" stackId="a" fill="#d3e5fe" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

// const StackedBarChart: React.FC<PureComponent> = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" stackId="a" fill="#8884d8" />
//           <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//   );
// };

// export default StackedBarChart
