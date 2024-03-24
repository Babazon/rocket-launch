import { sortLaunches } from '../src//utils/sortLaunches'
import { Launch } from '../src/services/types'

describe('sortLaunches', () => {
  it('should sort launches in ascending order by default', () => {
    const launches: Partial<Launch>[] = [
      { date_utc: '2023-01-01T00:00:00Z' },
      { date_utc: '2022-01-01T00:00:00Z' },
      { date_utc: '2024-01-01T00:00:00Z' },
    ]

    // @ts-ignore
    const sortedLaunches = sortLaunches({ launches })

    expect(sortedLaunches).toEqual([
      { date_utc: '2022-01-01T00:00:00Z' },
      { date_utc: '2023-01-01T00:00:00Z' },
      { date_utc: '2024-01-01T00:00:00Z' },
    ])
  })

  it('should sort launches in descending order when reverse is true', () => {
    const launches: Partial<Launch>[] = [
      { date_utc: '2023-01-01T00:00:00Z' },
      { date_utc: '2022-01-01T00:00:00Z' },
      { date_utc: '2024-01-01T00:00:00Z' },
    ]

    // @ts-ignore
    const sortedLaunches = sortLaunches({ launches, reverse: true })

    expect(sortedLaunches).toEqual([
      { date_utc: '2024-01-01T00:00:00Z' },
      { date_utc: '2023-01-01T00:00:00Z' },
      { date_utc: '2022-01-01T00:00:00Z' },
    ])
  })

  it('should return an empty array if launches is empty', () => {
    const launches: Launch[] = []

    const sortedLaunches = sortLaunches({ launches })

    expect(sortedLaunches).toEqual([])
  })
})
