const Heading = ({ text }) => {
  const half = Math.ceil(text.length / 2); // aadha text nikalne ke liye
  const firstHalf = text.slice(0, half);
  const secondHalf = text.slice(half);

  const firstWord = text.split(" ")[0];
  const isAboutHeading = firstWord.toLowerCase() === "about";

  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 drop-shadow-lg relative inline-block uppercase">
      <span className={`${isAboutHeading ? "text-black" : "text-[#F8069D]"}`}>
        {firstHalf}
      </span>
      <span className={`${isAboutHeading ? "text-[#F8069D]" : "text-black"}`}>
        {secondHalf}
      </span>
      <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
    </h2>
  );
};

export default Heading;
