export default function Modal({ img, alt, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[10px] w-[80vw] xl:w-[60vw] flex-col xl:flex-row h-auto xl:h-[70vh] flex backdrop-brightness-50">
        <div className="flex-1">
          <img
            src={img}
            alt={alt}
            className="h-[100%] rounded-l-[10px]"
            onClick={() => window.open(img, "_blank")}
          />
        </div>
        <div className="text-black flex-1 p-[15px]">
          <p className="mb-[20px] text-[3vw] xl:text-[1.5vw] border-b-[2px] border-gray-400/50 p-[5px]">
            Fecha: 01/01/01
          </p>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            iste ipsum, doloremque consequuntur blanditiis quod aliquam aut
            fugit at aliquid pariatur. Eum exercitationem doloribus, libero
            repudiandae et soluta vitae magnam.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            omnis perferendis, fuga voluptas adipisci, ducimus minima sint ullam
            deleniti molestias repellendus distinctio temporibus voluptatem?
            Dolore nulla saepe commodi molestiae magni?
          </p>
        </div>
      </div>
    </div>
  );
}
