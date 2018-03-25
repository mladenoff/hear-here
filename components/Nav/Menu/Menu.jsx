import React from 'react';
import { Link } from 'react-router-dom';
import SessionButtonsContainer from '../../Session/SessionButtonsContainer';
import BackButton from '../../shared/BackButton';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    console.log(props);
  }

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    const managerLink = this.props.isManager ? (
      <div>
      <Link className="modal-option" to="/manage/upcoming">Manage your streams</Link>
      <Link className="modal-option" to="/manage/create">Schedule a new stream</Link>
      </div>
    ) : '';

    const modalToggle = this.state.modalOpen ? '' : 'modal-closed';

    return (
      <div
        onClick={this.toggleModal}
        className="menu-container">
        <img
          className="menu-button"
          src="./assets/menu-button.png"
          alt="menu button"/>
        <aside className={`menu-modal ${modalToggle}`}>
          <button id="close" className="modal-option" onClick={this.toggleModal} >
          <BackButton />
          <div className="username">
            {
              this.props.username 
            }
          </div>
          </button>
          <Link className="modal-option" to="/live">
            View current streams
          </Link>
          {
            managerLink
          }
          <SessionButtonsContainer />
        </aside>
      </div>
    );
  }
}

export default Menu;
