import React from 'react';
import SetlistItem from './SetlistItem';

class Setlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };

    this.visibleSongs = this.visibleSongs.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchSetlist(this.props.match.params.setlistId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading != this.state.loading) {
      this.setState({ loading: newProps.loading });
    }
  }

  visibleSongs() {
    return this.props.items.slice(this.props.currentSongIdx, this.props.currentSongIdx + 3);
  };

  render() {
    if (this.state.loading) return null;

    return (
      <div className='setlist-container'>
        {
          this.visibleSongs().map(
            item => <SetlistItem item={item} key={item.id} />
          )
        }
      </div>
    );
  }
}

export default Setlist;
