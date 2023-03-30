import { Text } from '@ui/text'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { mapItems } from '~/utils/data'

function Card({ experience }: any) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#ffffff20',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #ffffff20' }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <Text variant="title/bold" className="text-white text-[24px] font-bold">
        {experience.title}
      </Text>

      <ul className="mt-5 list-decimal ml-5 space-y-2">
        {experience.points.map((point: any, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-base pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default function Map() {
  return (
    <>
      <VerticalTimeline lineColor="#ffffff20">
        {mapItems.map((experience: any, index: number) => (
          <Card key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </>
  )
}
