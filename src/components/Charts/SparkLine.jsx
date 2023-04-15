import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent
{
  render()
  {
  const {id, height, width, color, data, type, currentColor} = this.props
   console.log(data)
   return <SparklineComponent
   id={id}
   height={height}
   width={width}
   lineWidth={10}
   valueType="Numeric"
   type={type}
   fill={color}
   border={{color: currentColor, width: 2}}
   dataSource={data}
   xName="x"
   yName="yVal"
   tooltipSettings={{
    visible: true,
    format:'${x} : data ${y}',
    trackLineSettings: { visible: true }
   }}
   >
    <Inject services={[SparklineTooltip]} />
  </SparklineComponent>
 }

}

export default SparkLine;