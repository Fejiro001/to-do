function DeleteModal(props) {
  const {
    showModal,
    setShowModal,
    confirmDelete,
    doNotShowAgain,
    setDoNotShowAgain
  } = props;

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Delete task?</h2>
            <p>This action cannot be undone.</p>
            <div className="confirmation-option">
              <input
                type="checkbox"
                id="do-not-show"
                name="do-not-show"
                checked={doNotShowAgain}
                onChange={(e) => {
                  setDoNotShowAgain(e.target.checked);
                  sessionStorage.setItem("doNotShowModal", e.target.checked);
                }}
              />
              <label htmlFor="do-not-show">Don't ask me again</label>
            </div>
            <div className="delete-actions">
              <button onClick={confirmDelete} className="confirm-delete">
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="cancel-delete">
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteModal;
