// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import airports from '@/lib/airportData'

type Data = {
    CityName: string,
    AirportCode: string,
    Country: string
  }[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(airports)
}
