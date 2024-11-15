export default function Modal({ img, fecha, descripcion, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const imageExtensions = [".jpg", ".jpeg", "png", ".gif", ".bmp", ".webp"];

  //

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[10px] w-[80vw] xl:w-auto xl:min-w-[60vw] flex-col xl:flex-row h-auto xl:h-auto xl:min-h-[70vh] xl:max-h-[90vh] flex backdrop-brightness-50">
        <div className="flex-1">
          {imageExtensions.some((extension) =>
            img.toLowerCase().endsWith(extension)
          ) ? (
            <img
              src={img}
              alt={"Escuela"}
              className="h-full w-full max-w-[80vw] object-cover rounded-l-[10px]"
              onClick={() => window.open(img, "_blank")}
            />
          ) : (
            <video
              src={img}
              controls
              loop
              autoplay
              className="w-full h-full object-cover cursor-pointer rounded-l-[10px]"
            ></video>
          )}
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
