import { sum } from '../utils'

// const sum = (a, b) => a + b
const sub = (a: number, b: number) => a - b

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

describe('Example of describe', () => {
  expect(sub(8, 3)).toBe(5)
})
