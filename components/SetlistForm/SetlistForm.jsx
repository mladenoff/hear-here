import React from 'react';

class SetlistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      songs: [],
      newSong: '',
      bandId: '',
    };

    this.handleAddSong = this.handleAddSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value,
    });
  }

  handleSongUpdate(index) {
    return (event) => {
      let newSongs = this.state.songs.slice(0);
      newSongs[index] = event.currentTarget.value;
      return this.setState({
        songs: newSongs,
      });
    };
  }

  handleAddSong(e) {
    e.preventDefault();
    this.setState({
      songs: this.state.songs.concat(this.state.newSong),
    });
    this.setState({ newSong: '' });
    this.textInput.focus();
  }

  handleRemoveSong(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSetlist(this.state);
  }

  // handleEnterAddSong(e) {
  //   console.log('hello yes here i am');
  //   console.log(e.keyCode);
  //   if (e.keyCode === 13) {
  //     console.log('hello yes also here i am inside');
  //     // this.setState({
  //     //   songs: this.state.songs.concat(this.state.newSong),
  //     // });
  //     // this.setState({ newSong: '' });
  //     // this.textInput.focus();
  //   }
  // }

  render() {
    return (
      <form>
        <select value={this.state.bandId} onChange={this.update('bandId')}>
          <option selected>SELECT YOUR BAND</option>
          {this.props.userBands.map((band) => (
            <option value={band.id}>{band.name}</option>
          ))}
        </select>
        <br />
        <input
          type="text"
          value={this.state.name}
          placeholder="EVENT TITLE"
          onChange={this.update('name')}
        />
        <br/>
        <input
          type="textarea"
          value={this.state.description}
          placeholder="DESCRIBE YOUR EVENT..."
          onChange={this.update('description')}
        />
        <br/>
        Setlist
        <br />
        {this.state.songs.map((song, index) => (
          <div key={index}>
            <input
              value={this.state.songs[index]}
              onChange={this.handleSongUpdate(index)}
            />
            <button onClick={this.handleRemoveSong}>-</button>
            <br />
          </div>
        ))}
        <input
          type="text"
          value={this.state.newSong}
          onChange={this.update('newSong')}
          ref={(input) => { this.textInput = input; }}
        />
        <button onClick={this.handleAddSong}>+</button>
        <br />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default SetlistForm;
