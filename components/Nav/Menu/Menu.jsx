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
      <Link className="modal-option" to="/manage/upcoming">Manage Sets</Link>
    ) : '';

    const modalToggle = this.state.modalOpen ? '' : 'modal-closed';

    return (
      <div
        onClick={this.toggleModal}
        className="menu-container">
        |||
        <aside className={`menu-modal ${modalToggle}`}>
          <button class="modal-option" onClick={this.toggleModal} >
            X
          </button>
          <Link className="modal-option" to="/live">
            Current Live Sets
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
