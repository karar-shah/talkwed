'use client'

import { Button, Select, SelectItem } from "@nextui-org/react"
import dynamic from "next/dynamic"
import React from "react"
import type { AxisOptions, Chart as ChartType } from 'react-charts'
import { } from "react-charts"
const Chart = dynamic(() => import('react-charts').then((mod) => mod.Chart), {
  ssr: false,
}) as typeof ChartType

const data = [
  {
    label: 'Profile Views',
    data: [
      { date: new Date('2023-06-01'), views: 150 },
      { date: new Date('2023-07-01'), views: 180 },
      { date: new Date('2023-08-01'), views: 100 },
      { date: new Date('2023-09-01'), views: 120 },
      { date: new Date('2023-10-01'), views: 200 },
      { date: new Date('2023-11-01'), views: 220 },
      { date: new Date('2023-12-01'), views: 180 },
      { date: new Date('2024-01-01'), views: 130 },
      { date: new Date('2024-02-01'), views: 160 },
      { date: new Date('2024-03-01'), views: 200 },
      { date: new Date('2024-04-01'), views: 180 },
      { date: new Date('2024-05-01'), views: 150 },
    ],
  },
]
const ProfileViewsChart = () => {
  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(
    () => ({
      getValue: (datum) => datum.date,
      formatters: {
        scale: (date: Date) => date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      },
    }),
    []
  )

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.views,
        elementType: 'line',
        min: 0,
        max: 250,
        tickValues: [0, 50, 100, 150, 200, 250],
        getStyle: () => ({
          stroke: '#8884d8',
          strokeWidth: 2,
        }),
      },
    ],
    []
  )
  return (
    <div className="pb-8 border rounded-md pl-6 pt-4 pr-8 flex-grow">
      <div className="flex flex-col lg:flex-row items-center space-y-1 justify-center lg:justify-normal mb-4">
        <div className="flex items-center rounded-md divide-x border border-[#D4D4D4]">
        <Button variant="light" radius="none" className="bg-[#9924E90D] py-3 px-4 rounded-md">Profile View</Button>
        <Button variant="light" radius="none" className="text-gray-600 py-3 px-8">Leads</Button>
        <Button variant="light" radius="none" className="text-gray-600 py-3 px-6">Reviews</Button>
        </div>
        <div className="lg:ml-auto text-sm text-gray-600">
        <Select
              items={monthsValues}
              placeholder="In last 12 months"
              className=""
              variant="bordered"
              classNames={{
                trigger: "trigger p-2 h-fit min-w-[200px] rounded bg-[#F8F8F8] border border-[#DCDCDC]",
                value: "value text-base max-md:text-sm",
              }}
            >
              {(months) => (
                <SelectItem key={months.key}>
                  {months.label}
                </SelectItem>
              )}
            </Select>
        </div>
      </div>
     <div className="h-72">
     <Chart
        options={{
          defaultColors: ['#6941C6'],
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
     </div>
    </div>
  )
}

export default ProfileViewsChart

export const monthsValues = [
  { key: "12months", label: "In last 12 months" },
  { key: "6months", label: "In last 6 months" },
  { key: "3months", label: "In last 3 months" },
];

