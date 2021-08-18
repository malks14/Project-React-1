import React from 'react'

import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const valueArray = props.dataPoints.map(dataPoints => dataPoints.value) //se hizo esta variable para poder juntar los valores , ya que es un array y poder devolver un objeto a map
    const totalMaximum = Math.max(...valueArray)//el spread operator es para agregar todos los valores, ya que max espera un valor y valueArray es un array, entonces suma todos y da un valor

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => 
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}/>)}

    </div>
}

export default Chart