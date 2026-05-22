function DeleteModal(props) {
  const {
    showModal,
    setShowModal,
    handleDelete,
    doNotShowAgain,
    setDoNotShowAgain
  } = props;

  return (
    <>
      {showModal && doNotShowAgain !== "true" && (
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
                  sessionStorage.setItem(
                    "doNotShowModal",
                    e.target.checked.toString()
                  );
                }}
              />
              <label htmlFor="do-not-show">Don't ask me again</label>
            </div>
            <div className="delete-actions">
              <button onClick={handleDelete} className="confirm-delete">
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
