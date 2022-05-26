import { useEffect, useContext } from 'react'
import mapboxGl from 'mapbox-gl'

const style = {
    wrapper: `flex-1 h-full w-full`,
}

mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  
const Map = () => {

    useEffect(() => {
        const map = new mapboxGl.Map({
          container: 'map',
          style: 'mapbox://styles/makg3p/cl3mvrid8001814qapii9d3xf',
          center: [46.15764, 14.422434],
          zoom: 3,
        })
    
    }, [])

    return <div className={style.wrapper} id='map' />
}

export default Map