import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toastify({ position = "top-center" }: { position?: any }) {
  return (
    <ToastContainer
      position={position}
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
