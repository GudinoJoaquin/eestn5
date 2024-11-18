export default function Modal({ img, fecha, descripcion, onClose, images, currentIndex, setModalImage }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation(); // Detener la propagación del clic
    const nextIndex = (currentIndex + 1) % images.length;
    setModalImage(images[nextIndex].url); // Actualizar la imagen
  };

  const handlePrevImage = (e) => {
    e.stopPropagation(); // Detener la propagación del clic
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setModalImage(images[prevIndex].url); // Actualizar la imagen
  };

  const imageExtensions = [".jpg", ".jpeg", "png", ".gif", ".bmp", ".webp"];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[10px] w-[80vw] xl:w-auto xl:min-w-[60vw] flex-col xl:flex-row h-auto xl:h-auto xl:min-h-[70vh] xl:max-h-[90vh] flex backdrop-brightness-50">
        <div className="flex-1 relative">
          <button
            onClick={handlePrevImage} // Acción para mostrar la imagen anterior
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            &#8249;
          </button>
          {imageExtensions.some((extension) =>
            img.toLowerCase().endsWith(extension)
          ) ? (
            <img
              src={img}
              alt={"Escuela"}
              className="h-full w-full max-w-[80vw] object-cover md:rounded-l-[10px] rounded-t-[10px]"
              onClick={() => window.open(img, "_blank")}
            />
          ) : (
            <video
              src={img}
              controls
              loop
              autoplay
              className="w-full h-full object-cover cursor-pointer md:rounded-l-[10px] rounded-t-[10px]"
            ></video>
          )}
          <button
            onClick={handleNextImage} // Acción para mostrar la imagen siguiente
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            &#8250;
          </button>
        </div>
        <div className="text-black flex-1 p-[15px]">
          <p className="mb-[20px] text-[3vw] xl:text-[1.5vw] border-b-[2px] border-gray-400/50 p-[5px]">
            Fecha: {fecha}
          </p>
          <p className="text-[16px]">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
