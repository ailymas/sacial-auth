import React from 'react'
import { Category,SeriesCollectionDirective, SeriesDirective, ChartComponent, ColumnSeries, Inject, Legend, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

const Bar = () => {
  const {currentMode} = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar
