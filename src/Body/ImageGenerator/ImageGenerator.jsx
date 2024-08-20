import React,{useRef, useState} from "react";
import "./ImageGenerator.css";
import default_image from "./default_image.webp";

const ImageGenerator = () => {
    const [image, setImage] = useState("/");
    let inputref=useRef(null);
    const imageGenerator = async () => {
        if(inputref.current.value===""){
            return 0;
    }
    const response = await fetch("https://api.openai.com/v1/images/generations",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer React_api",
            "User-Agent": "Chrome",
    },
    body: JSON.stringify({
        prompt: `${inputref.current.value}`,
        n: 1,
        size: "512x512",
    }),
    });
    let data = await response.json();
    let data_Array= data.data;
    setImage(data_Array[0].url);
}
    return (
        <div className='ai-image-generator flex flex-col  items-center mt-10  gap-1'>
            <div className='header text-7xl font-medium pb-10'>AI Image <span className="font-semibold text-pink-600">generator</span> </div>
                <div className='img-loading'>
                    <div className='image '>
                        <img className="mb-10 h-96" src={image==="/"?default_image:image} alt='default_image' />
                    </div>
                </div>
           <div className=" flex bg-slate-600 w-6/12 justify-around search-box items-center rounded-3xl  h-20">
           <input type="text" ref={inputref} className="w-3/4 pl-4 bg-slate-600 search-input " placeholder="Describe What you want to see"/>
           <div className="w-1/4 generate-btn flex items-center justify-center text-lg bg-pink-600 rounded-3xl h-5/6" onClick={()=>{imageGenerator()}}>Generate</div>
           </div>
        </div>

    );
};
export default ImageGenerator;