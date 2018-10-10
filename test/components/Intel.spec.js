import React from 'react'
import renderer from 'react-test-renderer'
import Intel from '../../components/Intel'
import sinon from 'sinon'

describe('Intel', () => {
  it('should render the text of the header', () => {
    const props = {
      product: 'Test product',
      title: 'Test title',
      location: 'London',
      tag: 'Test tag',
      navigation: {
        navigate: sinon.spy()
      }
    }
    const wrapper = renderer.create(<Intel {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
