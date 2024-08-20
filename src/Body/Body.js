// import React, { useState } from 'react';

// const Body = () => {
//     const [prompt, setPrompt] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const query = async (data) => {
//         try {
//             const response = await fetch(
//                 'https://api-inference.huggingface.co/models/latent-consistency/lcm-lora-sdxl',
//                 {
//                     headers: {
//                         Authorization: `Bearer ${process.env.REACT_APP_HUGGINGFACE_API_KEY}`, // Use environment variable
//                         'Content-Type': 'application/json',
//                     },
//                     method: 'POST',
//                     body: JSON.stringify(data),
//                 }
//             );
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const result = await response.blob();
//             return result;
//         } catch (error) {
//             throw new Error(error.message);
//         }
//     };

//     const generateImage = async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const blob = await query({ inputs: prompt });
//             const url = URL.createObjectURL(blob);
//             setImageUrl(url);
//         } catch (error) {
//             setError(`Error generating image: ${error.message}`);
//             console.error('Error:', error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const downloadImage = () => {
//         if (imageUrl) {
//             const link = document.createElement('a');
//             link.href = imageUrl;
//             link.download = 'generated_image.png';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         }
//     };

//     return (
//         <div>
//             <input
//                 className='w-40 h-10'
//                 type='text'
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 placeholder='Enter a prompt for generating image'
//             />
//             <button
//                 className='bg-purple-500 p-4'
//                 onClick={generateImage}
//                 disabled={loading}
//             >
//                 {loading ? 'Generating...' : 'Generate Image'}
//             </button>

//             {error && <p>{error}</p>} {"error"}

//             {imageUrl && (
//                 <>
//                     <img
//                         src={imageUrl}
//                         alt='Generated Image'
//                         style={{ maxWidth: '100%', height: 'auto' }}
//                     />
//                     <button onClick={downloadImage}>Download Image</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Body;
