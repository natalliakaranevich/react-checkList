import {CurrentSelected} from '../../src/components/CurrentSelectedItems';
import '../helpers/initDom';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('Test remove item func', function () {
  let component, items;

  beforeEach(function () {
    items = [
      {
        item: 'Element 1',
        id: 'item-0'
      },
      {
        item: 'Element 2',
        id: 'item-1'
      }
    ];
    component = shallow(<CurrentSelected currentSelectedItems={items} itemsCollectionWasChanged={true}  />);
    jasmineEnzyme();
  });

  it('should return selected items', function () {
    // item to remove
    const e = {
      currentTarget: {
        dataset: {
          id: 'item-0'
        }
      }
    };

    expect(component.instance().getItemsCurrentSelectedItems(e)).toEqual([items[1]]);
  });

  it('should call remove function', function () {
    expect(component.find('a').length).toEqual(1);
    console.log(component.find('a').get(0).length);
    component.find('a')[0].simulate('click');
    expect(component.instance().removeItem()).toHaveBeenCalled();
  })
});