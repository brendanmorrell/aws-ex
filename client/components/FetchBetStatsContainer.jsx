import React from 'react';
import axios from 'axios';

class FetchBetStatsContainer extends React.Component {
  state = { bookmakers: [] };
  componentDidMount() {
    axios({
      url: 'https://bettingodds-bettingoddsapi-v1.p.mashape.com/bookmakers',
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'gldR6gyuvGmshVeAhdgA5ZiKIpQHp1IPQxsjsngVeegNbIu0tV',
        'X-Mashape-Host': 'bettingodds-bettingoddsapi-v1.p.mashape.com',
      },
    }).then(({ data }) => {
      const bookmakers = [];
      for (const bookmaker in data) {
        const { name } = data[bookmaker];
        bookmakers.push(name);
      }
      this.setState({ bookmakers });
    });
  }

  render() {
    const bookmakers = this.state.bookmakers.map(bookmaker => <p key={bookmaker}>{bookmaker}</p>);
    return <>{bookmakers}</>;
  }
}

export default FetchBetStatsContainer;
