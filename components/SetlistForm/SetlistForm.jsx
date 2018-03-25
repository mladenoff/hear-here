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
    this.props.createSetlist(this.state); // TODO: Redirect after this
  }

  render() {
    return (
      <form className="setlist-form">
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
        <textarea
          value={this.state.description}
          placeholder="DESCRIBE YOUR EVENT..."
          onChange={this.update('description')}
          rows="3"
        />
        <br/>
        Setlist
        <br />
        {this.state.songs.map((song, index) => (
          <label htmlFor="add-song" className="box-holder" key={index}>
            <input
              value={this.state.songs[index]}
              onChange={this.handleSongUpdate(index)}
              className="song-box"
            />
            <button 
              onClick={this.handleRemoveSong}
              className="form-button remove"
            >
              -
            </button>
            <br />
          </label>
        ))}
        <label htmlFor="add-song" className="box-holder">
          <input
            type="text"
            value={this.state.newSong}
            onChange={this.update('newSong')}
            ref={(input) => { this.textInput = input; }}
            className="song-box"
          />
          <button onClick={this.handleAddSong} className="form-button add">+</button>
        </label>
        <br />
        <button onClick={this.handleSubmit} className="submit-form add">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default SetlistForm;
