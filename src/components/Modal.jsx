import { useEffect } from "react";

export default function Modal({ modalData, onClose, images, setModalData }) {
  const { index, album, fecha, descripcion } = modalData || {};

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];

  // Función para cambiar la imagen al siguiente
  const goToNextImage = () => {
    if (index < images.length - 1) {
      setModalData({
        ...modalData,
        index: index + 1,
      });
    }
  };

  // Función para cambiar la imagen al anterior
  const goToPrevImage = () => {
    if (index > 0) {
      setModalData({
        ...modalData,
        index: index - 1,
      });
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[10px] w-[80vw] xl:w-auto xl:min-w-[60vw] flex-col xl:flex-row h-auto xl:h-auto xl:min-h-[70vh] xl:max-h-[90vh] flex backdrop-brightness-50">
        {/* Flecha izquierda */}
        

        <div className="flex-1 relative">
          {images[index]?.url && imageExtensions.some((extension) =>
            images[index].url.toLowerCase().endsWith(extension)
          ) ? (
            <img
              src={images[index].url}
              alt="Escuela"
              className="h-full w-full max-w-[80vw] object-cover xl:rounded-l-[10px] xl:rounded-r-[0px] rounded-t-[10px]"
              onClick={() => window.open(images[index].url, "_blank")}
            />
          ) : (
            <video
              src={images[index]?.url}
              controls
              loop
              autoPlay
              className="w-full h-full object-cover cursor-pointer md:rounded-l-[10px] rounded-t-[10px]"
            ></video>
          )}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={goToPrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          &lt;
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
        >
          &gt;
        </button>

        <div className="text-black flex-1 p-[15px]">
          <p className="mb-[20px] text-[3vw] xl:text-[1.5vw] border-b-[2px] border-gray-400/50 p-[5px]">
            Fecha: {fecha}
            <br />
            {album}
          </p>
          <p className="text-[16px]">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
