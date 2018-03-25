import React from 'react';

class SetlistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      songs: [],
      newSong: '',
    };

    this.handleAddSong = this.handleAddSong.bind(this);
    this.handleEnterAddSong = this.handleAddSong.bind(this);
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

  handleAddSong() {
    this.setState({
      songs: this.state.songs.concat(this.state.newSong),
    });
    this.setState({ newSong: '' });
    this.textInput.focus();
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
        Songs
        <br />
        {this.state.songs.map((song, index) => (
          <div key={index}>
            <input
              value={this.state.songs[index]}
              onChange={this.handleSongUpdate(index)}
            />
            <button>-</button>
            <br />
          </div>
        ))}
        <input
          type="text"
          value={this.state.newSong}
          onChange={this.update('newSong')}
          ref={(input) => { this.textInput = input; }}
          // onKeyDown={this.handleEnterAddSong}
        />
        <button onClick={this.handleAddSong}>+</button>
        <br />
        <button>
          Submit
        </button>
      </form>
    );
  }
}

export default SetlistForm;
