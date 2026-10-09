function PopupWindow({ children, onNext, buttonText = "→" }) {
  return (
    <div className="popup-window">

      <div className="popup-titlebar">
        <span className="popup-dot red"></span>
        <span className="popup-dot yellow"></span>
        <span className="popup-dot green"></span>
      </div>

      <div className="popup-content">
        {children}

        <button
          type="button"
          className="popup-next"
          onClick={onNext}
        >
          {buttonText}
        </button>
      </div>

    </div>
  );
}

export default PopupWindow;