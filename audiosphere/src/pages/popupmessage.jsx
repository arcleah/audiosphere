export default function PopupMessage({ message, type, onClose }) {
  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-${
        type === "error" ? "red" : "green"
      }-500 text-white px-4 py-2 rounded-lg shadow-lg z-50`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white font-bold">
          &times;
        </button>
      </div>
    </div>
  );
}
