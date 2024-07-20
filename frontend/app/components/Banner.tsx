import Image from "next/image";
import banner from "../../public/banner.jpg";

const splitTextToSpans = (text: string) => {
  return text.split('').map((char, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
      {char === ' ' ? '\u00A0' : char} 
    </span>
  ));
};
const Banner = () => {
  return (
    <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
          <h1 className="text-2xl font-bold text-white fade-in">{splitTextToSpans('Welcome To')}</h1>
          <h1 className="text-4xl font-bold text-white fade-in">{splitTextToSpans('BOOK BROWSER')}</h1>
          <p className="text-white text-lg fade-in">{splitTextToSpans('The best place to find your next book')}</p>
        </div>
        <Image src={banner}
          alt="A banner image"
          className="object-cover h-96 w-full"
        />
      </div>
  );
}

export default Banner;