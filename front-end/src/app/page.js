import Button from "@/components/button/Button";
import HeaderLogo from "@/components/headerLogo/HeaderLogo";
import ImgMainStar from "@/components/imgMainStar/ImgMainStar";
import MainStart from "@/components/mainStart/MainStart";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeaderLogo />
      <MainStart />
      <p className="flex justify-center items-center p-10">
        Lorem ipsum dolor sit amet consectetur adipiscing
      </p>
      <div className="flex justify-center items-center text-center space-x-10 mr-auto p-10">
        <Button className="w-72 h-10 mar bg-lime-300 rounded-xl hover:bg-lime-600">
          Registrarse
        </Button>
        <Button className="w-72 h-10 bg-slate-400 rounded-xl hover:bg-lime-800">
          Inicio Sesion
        </Button>
      </div>
      <div className="felx grid grid-cols-5 gap-10 justify-center items-center p-5 mx-auto">
        <ImgMainStar
          className="max-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1446478805/es/foto/un-chef-est%C3%A1-terminando-la-preparaci%C3%B3n-del-plato.jpg?s=2048x2048&w=gi&k=20&c=sVHVxqSu3GzNgGz9lSfOPoQxvCw9-7EOTee5RK8jmpY="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />

        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />
        
        <ImgMainStar
          className="max-w-80"
          imageSrc="https://media.gettyimages.com/id/1081422898/es/foto/pan-frito-pato.jpg?s=2048x2048&w=gi&k=20&c=oSyVLLNUnt5BnaBXedBEgeuJJOKVQOCZ9pmFaSDp4_U="
          altText="imagen 1"
        />
      </div>
    </main>
  );
}
