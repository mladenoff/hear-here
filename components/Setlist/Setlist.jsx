import React from 'react';
import SetlistItem from './SetlistItem';

class Setlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
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

  render() {
    if (this.state.loading) return null;
    debugger

    return (
      <div className='setlist-container'>
        {
          this.props.items.map(
            item => <SetlistItem item={item} key={item.id} />
          )
        }
      </div>
    );
  }
}

export default Setlist;
