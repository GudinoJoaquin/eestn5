export default function Noticia({ href, text, boldText }) {
  return (
    <div className="flex gap-[200px] justify-center mt-[30px]">
      <div
        onClick={() => (window.location.href = { href })}
        className="xl:w-[400px] xl:h-[150px] w-[320px] h-[80px] border border-white xl:rounded-[20px] rounded-[10px] hover:scale-[1.10] flex justify-center items-center transition duration-[.3s] hover:cursor-pointer"
      >
        <p className="text-white text-center xl:text-[20px] text-[12px] font-medium">
          {text} <p className="underline font-bold">{boldText}</p>
        </p>
      </div>
    </div>
  );
}
