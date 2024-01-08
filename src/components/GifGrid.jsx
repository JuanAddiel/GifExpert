import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks";


export const GifGrid = ({category})=>{
    const {images, isLoading} = useFetchGifs(category);

    // const [images, setImages] = useState([ ]);
    // useEffect(()=>{
    //   getGifts(category)
    //   .then(res =>setImages(res))
    //   .catch(err=>console.error(err))
    // },[ ]);
    return (
      <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <h2></h2>
        <div className="card-grid">
          {images.map((image) => (
            <GifItem 
            key={image.id} 
            {...image}
            />
          ))}
        </div>
      </>
    );
}