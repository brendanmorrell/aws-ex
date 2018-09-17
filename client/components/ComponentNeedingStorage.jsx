import React, { Component } from 'react';
import { Storage } from './Storage.jsx';

const reallyLongApiCall = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ username: 'brendan', favoriteMovie: 'the big lebowski' });
      reject();
    }, 3000)
  );

export class ComponentNeedingStorage extends Component {
  state = {
    username: '',
    favoriteMovie: '',
    isFetching: false,
  };
  fetchData = save => {
    this.setState({ isFetching: true });
    reallyLongApiCall().then(({ username, favoriteMovie }) => {
      save('username', username);
      save('favoriteMovie', favoriteMovie);
      this.setState({ username, favoriteMovie, isFetching: false });
    });
  };
  render() {
    return (
      <Storage
        render={({ load, save, remove }) => {
          const username = load('username') || this.state.username;
          const favoriteMovie = load('favoriteMovie') || this.state.favoriteMovie;
          if (!username || !favoriteMovie) {
            if (!this.state.isFetching) {
              this.fetchData(save);
            }
            return <div>Loading...</div>;
          }
          return (
            <div>
              My username is {username}, and I love to watch {favoriteMovie}.
            </div>
          );
        }}
      />
    );
  }
}
