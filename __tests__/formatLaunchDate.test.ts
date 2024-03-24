import moment from 'moment'

import { formatLaunchDate } from '../src/utils/formatLaunchDate'

describe('formatLaunchDate', () => {
  it('correctly formats the launch date', () => {
    const dateUtc = '2024-03-31T18:30:00Z'

    const expectedFormattedDate = moment
      .utc(dateUtc)
      .utcOffset(moment().utcOffset())
      .format('MMMM Do YYYY, HH:mm')

    const formattedDate = formatLaunchDate(dateUtc)

    expect(formattedDate).toEqual(expectedFormattedDate)
  })
})
