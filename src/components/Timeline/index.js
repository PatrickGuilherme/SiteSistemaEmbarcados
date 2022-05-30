import React from 'react'
import { timelines } from '../../constants'
import { Container, YearBox, YearText } from './styles'
import { IoLocationSharp } from 'react-icons/io5'

export default function Timeline() {
  return (
    <Container>
      {timelines.map(timeline => (
        <YearBox key={timeline.year}>
          <YearText color={timeline.color}>
            <IoLocationSharp color={timeline.color} />
            {timeline.year}
          </YearText>
          <div style={{ height: 15, backgroundColor: timeline.color }}></div>
        </YearBox>
      ))}
    </Container>
  )
}
