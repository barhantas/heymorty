import { RestBaseModel } from 'rest-in-model';

class Character extends RestBaseModel {
  getConfig() {
    return {
      fields: {
        id: {},
        name: {},
        status: {},
        species: {},
        type: {},
        gender: {},
        origin: {},
        location: {},
        image: {},
        episode: {},
        url: {},
        created: {},
      },
      resultListField: (response) => response.results,
      paths: {
        default: 'character',
      },
    };
  }
}

export default Character;
