import React from 'react';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoData: {
        name: 'Name',
        bio: 'Bio',
        login: 'login',
      },
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch('https://api.github.com/users/Abhi7102004');
      const data = await response.json();
      this.setState({ repoData: data, isLoading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  render() {
    console.log("JAI MATA DI");
    const { name, bio, login } = this.state.repoData;
    return (
      <div className="user-card" style={{ borderTopStyle: 'solid' }}>
        <h2>{name}</h2>
        <h3>{bio}, BTech</h3>
        <p>{login}</p>
      </div>
    );
  }
}

export default UserCard;
