import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { NETFLIX_RICK_AND_MORTY_EPISODES } from '../../constants';
import { Loading } from '../../components';

class CharacterEpisodeList extends React.Component {
  render() {
    const { episodes, loading } = this.props;
    return (
      <div className="character-episode-list">
        {!loading ? (
          <List
            bordered
            size="large"
            dataSource={episodes}
            header={<div className="episode-list-header">Episodes</div>}
            renderItem={(episode) => (
              <List.Item
                key={episode.id}
                onClick={() => {
                  window.open(
                    NETFLIX_RICK_AND_MORTY_EPISODES[episode.episode],
                    'mywindow',
                    'location=1,status=1,scrollbars=1,  width=900,height=900'
                  );
                }}>
                <List.Item.Meta
                  title={episode.name}
                  description={episode.episode}
                />
                {episode.air_date}
              </List.Item>
            )}
          />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default CharacterEpisodeList;

CharacterEpisodeList.propTypes = {
  episodes: PropTypes.array,
  loading: PropTypes.bool,
};
