
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) =>
                        <GifGridItem
                            key={image.id}
                            {...image} />
                    )
                }
            </div>
        </>
    )
}