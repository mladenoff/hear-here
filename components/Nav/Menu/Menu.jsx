import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    const managerLink = this.props.isManager ? (
      <Link className="modal-option" to="/manage/upcoming">Manage your streams</Link>
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
          <div>
            X
          </div>
          </button>
          <Link className="modal-option" to="/live">
            View other streams
          </Link>
          {
            managerLink
          }
        </aside>
      </div>
    );
  }
}

export default Menu;
