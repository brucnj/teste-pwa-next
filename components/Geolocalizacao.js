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
                // <table className="mt-10 table-auto">
                //     <thead>
                //         <tr>
                //             <th className="px-10 border border-black">Latitude</th>
                //             <th className="px-10 border border-black">Longitude</th>
                //             <th className="px-10 border border-black">Accuracy</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <tr>
                //             <td className="px-10 border border-black">{location.latitude}</td>
                //             <td className="px-10 border border-black">{location.longitude}</td>
                //             <td className="px-10 border border-black">{location.accuracy}</td>
                //         </tr>
                //     </tbody>
                // </table>
                <iframe width="600" height="500" id="gmap_canvas" src={"https://maps.google.com/maps?q=" + location.latitude + "," + location.longitude + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} scrolling="no"></iframe>
            }
        </>
    )
}

export default Geolocalizacao