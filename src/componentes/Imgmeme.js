import React, {useState} from 'react';
import html2canvas from 'html2canvas';

const Imgmeme = () => {

    const [textomeme, setTextomeme] = useState();
    const [imgMeme, setImgMeme] = useState();

    const textmeme = (e) => {
        setTextomeme(e.target.value);
        console.log(e.target.value);
    }

    const seleccionarImg = (e) => {
        setImgMeme (e.target.value);
        console.log(e.target.value);
    }

    const descarga = (e) => {
        html2canvas(document.querySelector("exportar")).then(function(canvas) {
            {/*document.body.appendChild(canvas);*/}
            let img = canvas.toDataURL("memesimg/png");
            let link = document.createElement("a");
            link.download = "memepropio.png"
            link.href = img;
            link.click();
        });
    }

   return (
        <div>

        <h1 className='mt-5 mb-3 text-light'>EDITA TU PROPIO MEME</h1>

        <h2 className='mt-2 mb-3'>Escribi tu texto</h2>

        <input onChange={textmeme} className="form-control w-25 m-auto d-block" type="text" placeholder="Pone tu frase" name="meme"/>

        <h2 className='mt-2 mb-3'>Elegi la imagen para tu meme</h2>

        <select onChange={seleccionarImg} className="form-select from-select-lg mb-3 w-50 m-auto" aria-label="Default select example">
            <option>Seleccioná una imagen</option>
            <option value={6}>Futurama</option>
            <option value={7}>Bob esponja</option>
            <option value={8}>Señora</option>
            <option value={9}>Calamardo</option>
        </select>

        <figure className='text-center' id='exportar'>
            
            <p className='w-100 px-30 position-absolute top-50 start-30 h1 text-center'>{textomeme}</p>
            <img src={`./memesimg/${imgMeme}.png `} className='figure-img mt-3 d-block m-auto' alt='meme'/>

        </figure>

        <button onClick={descarga} type='button' className='btn btn-primary mt-4 mb-4'>Descargar meme</button>

      

        </div>
    )

}

export default Imgmeme;