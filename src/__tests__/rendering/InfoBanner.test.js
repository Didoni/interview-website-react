import React from 'react';
import ReactDOM from 'react-dom';
import InfoBanner from '../../components/InfoBanner';
import Typography from '@material-ui/core/Typography';
import { createShallow } from '@material-ui/core/test-utils';

describe('App component', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <InfoBanner text="Test" success>
        <h1>Child</h1>
      </InfoBanner>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('does not render child element by default', () => {
    const wrapper = shallow(
      <InfoBanner text="Test">
        <h1>Child</h1>
      </InfoBanner>
    );
    const text = wrapper.find(Typography).text();
    expect(text).toEqual('Test');
    expect(wrapper.exists('h1')).toEqual(false);
  });

  it('renders child element if success', () => {
    const wrapper = shallow(
      <InfoBanner text="Test" success>
        <h1>Child</h1>
      </InfoBanner>
    );
    const text = wrapper.find(Typography).text();
    expect(text).toEqual('Test');
    const childtext = wrapper.find('h1').text();
    expect(childtext).toEqual('Child');
  });
});
