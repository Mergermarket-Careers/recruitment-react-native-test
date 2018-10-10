import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../../components/Header'

describe('Header', () => {
  it('should render the text of the header', () => {
    const wrapper = renderer.create(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
