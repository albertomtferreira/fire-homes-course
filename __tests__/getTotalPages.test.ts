import { describe, it, expect, vi } from 'vitest'
import { getTotalPages } from '../firebase/server'

describe('getTotalPages', () => {
  it('calculates total pages from query count', async () => {
    const mockSnapshot = { data: () => ({ count: 12 }) }
    const mockQuery = {
      count: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue(mockSnapshot)
      })
    } as any

    const pages = await getTotalPages(mockQuery, 5)
    expect(pages).toBe(3)
  })

  it('returns 0 pages when query count is 0', async () => {
    const mockSnapshot = { data: () => ({ count: 0 }) }
    const mockQuery = {
      count: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue(mockSnapshot)
      })
    } as any

    const pages = await getTotalPages(mockQuery, 5)
    expect(pages).toBe(0)
  })

  it('rounds up when there is a partial page', async () => {
    const mockSnapshot = { data: () => ({ count: 7 }) }
    const mockQuery = {
      count: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue(mockSnapshot)
      })
    } as any

    const pages = await getTotalPages(mockQuery, 5)
    expect(pages).toBe(2)
  })
})
