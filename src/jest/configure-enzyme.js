/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const configureEnzyme = () => {
  Enzyme.configure({ adapter: new Adapter() })
}

export default configureEnzyme
