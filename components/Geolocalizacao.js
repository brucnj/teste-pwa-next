import { useState } from "react";

const Geolocalizacao = () => {
    const [location, setLocation] = useState({ access: false, latitude: "", longitude: "",  accuracy: "" })
    const getLocation = async () => {
        navigator.geolocation.watchPosition(position => {
            console.log(position);
            setLocation({ access: true, latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy });
        });
    };

    return(
        <>
            <button onClick={getLocation} className="px-10 py-5 text-white bg-stone-900">Localização do usuário</button>
            {location.access &&
                <iframe width="600" height="500" id="gmap_canvas" src={"https://maps.google.com/maps?q=" + location.latitude + "," + location.longitude + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} scrolling="no"></iframe>
            }
        </>
    )
}

export default Geolocalizacao