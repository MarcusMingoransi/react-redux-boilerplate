import React from 'react'
import Home from './Home'
import 'jest'

// import Adapter from 'enzyme-adapter-react-16'
// import { shallow, configure } from 'enzyme'

// configure({ adapter: new Adapter() })

// const wrapper = shallow(<Home />)

// describe('HomeComponent - No props', () => {
//   it('should have state set properly', () => {
//     expect(wrapper.find('button').text).toEqual('Click to Subtract')
//   })
// })

const sum = (a: number, b: number) => a + b

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
