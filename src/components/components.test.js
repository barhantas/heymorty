import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  Loading,
  InfoItem,
  CharacterCard,
  CharacterList,
  CharacterDetailCard,
  CharacterEpisodeList,
} from '../components';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  describe('Loading', () => {
    it('should render self and subcomponents correctly', () => {
      const loadingCenter = shallow(<Loading center />);
      const loading = shallow(<Loading />);
      expect(loadingCenter.hasClass('loading center')).toBe(true);
      expect(loading.hasClass('loading center')).toBe(false);
    });
  });
  describe('InfoItem', () => {
    const props = {
      label: 'Baris',
      context: 'Hantas',
      imgUrl: 'ImageUrl',
    };
    const propsNoImage = {
      label: 'Baris',
      context: 'Hantas',
    };
    it('should render self and subcomponents correctly', () => {
      const infoItem = shallow(<InfoItem {...props} />);
      expect(infoItem.find('div').hasClass('info-item')).toBe(true);
      expect(infoItem.find('div').text()).toBe('Baris:Hantas');
      expect(infoItem.find('img').hasClass('info-item-logo')).toBe(true);
      expect(infoItem.exists('img')).toBe(true);
      const infoItemNoImage = shallow(<InfoItem {...propsNoImage} />);
      expect(infoItemNoImage.exists('img')).toBe(false);
    });
  });
  describe('CharacterCard', () => {
    it('should render self and subcomponents correctly', () => {
      const props = {
        character: {
          id: 1,
          name: 'Baris',
          image: 'imageurl',
        },
      };
      const characterCard = shallow(<CharacterCard {...props} />);
      expect(characterCard.find('div').hasClass('character-card')).toBe(true);
      expect(characterCard.find('Meta').prop('title')).toEqual('Baris');
      expect(characterCard.find('Link').prop('to')).toEqual('character/1');
    });
  });
  describe('CharacterList', () => {
    it('should render self and subcomponents correctly', () => {
      const props = {
        characters: [
          {
            id: 1,
            name: '1',
            image: '1',
          },
          {
            id: 2,
            name: '2',
            image: '2',
          },
        ],
      };
      const characterList = shallow(<CharacterList {...props} />);
      expect(characterList.find('div').hasClass('character-list')).toBe(true);
      expect(characterList.find('CharacterCard').length).toEqual(2);
    });
  });
  describe('CharacterDetailCard', () => {
    it('should render self and subcomponents correctly', () => {
      const props = {
        character: {
          id: 1,
          name: 'Baris',
          image: 'imageurl',
          status: 'Alive',
          origin: {
            name: 'Dünya',
          },
          location: {
            name: 'Dünya',
          },
        },
      };
      const characterDetailCard = shallow(<CharacterDetailCard {...props} />);
      expect(
        characterDetailCard.find('div').hasClass('character-detail-card')
      ).toBe(true);
      expect(
        characterDetailCard.find('.character-name-row').prop('children')
      ).toEqual('Baris');
    });
  });
  describe('CharacterEpisodeList', () => {
    it('should render self and subcomponents correctly', () => {
      const props = {
        episodes: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
        loading: false,
      };
      const characterEpisodeList = shallow(<CharacterEpisodeList {...props} />);
      expect(
        characterEpisodeList.find('div').hasClass('character-episode-list')
      ).toBe(true);
      expect(characterEpisodeList.find('List').prop('dataSource')).toEqual([
        {
          id: 1,
          name: '1',
        },
        {
          id: 2,
          name: '2',
        },
      ]);
    });
  });
});
