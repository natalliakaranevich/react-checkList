import {CurrentSelected} from '../../src/components/CurrentSelectedItems';
import '../helpers/initDom';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('Test remove item func', function () {
  var component;

  beforeEach(function () {
    jasmineEnzyme();
  });

  it('should return correct item id for remove', function () {
    const e = {
      currentTarget: '<a data-id="item-0" />'
    };
    const items = [
      {
        item: 'Element 1',
        id: 'item-0'
      },
      {
        item: 'Element 2',
        id: 'item-1'
      }
    ];
    spyOn(CurrentSelected.prototype, 'getItemsToRemove');
    component = shallow(
      <CurrentSelected currentSelectedItems={items} itemsCollectionWasChanged={true}  />
    );
    component.update();
    console.log('====================')
    console.log(component.instance().getItemsToRemove());
    expect(component.instance().getItemsToRemove(e)).toBe(true);
  })
});