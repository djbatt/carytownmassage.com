import Link from "next/link";
import GoogleMapReact from "google-map-react";
import { GoLocation, GoLinkExternal } from "react-icons/go";

//Styles
import styles from "../styles/footer.module.scss";
import MapStyle from "../lib/googleMapStyle.json";

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: MapStyle,
  };
}

export default function Footer(props) {
  const mapData = {
    center: {
      lat: 37.55211552295359,
      lng: -77.47332695057663,
    },
    business: {
      lat: 37.55211552295359,
      lng: -77.47332695057663,
    },
    zoom: 18,
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  };
  const handleApiLoaded = (map, maps) => {
    const parkingCoords = [
      { lat: 37.5523024525228, lng: -77.47327277635917 },
      { lat: 37.552276403529895, lng: -77.47320572113185 },
      { lat: 37.55216317004676, lng: -77.47326338862733 },
      { lat: 37.55218762424077, lng: -77.47332843219783 },
    ];

    var parking = new maps.Polygon({
      paths: parkingCoords,
      strokeColor: "#5cb85e",
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: "#5cb85e",
      fillOpacity: 1,
    });
    parking.setMap(map);

    const extraParkingCoords = [
      { lat: 37.55221258006946, lng: -77.47248344111938 },
      { lat: 37.5521774936264, lng: -77.47238889324888 },
      { lat: 37.55206691806147, lng: -77.4724552779239 },
      { lat: 37.552099346489356, lng: -77.4725478141376 },
    ];

    var extraParking = new maps.Polygon({
      paths: extraParkingCoords,
      strokeColor: "#5cb85e",
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: "#5cb85e",
      fillOpacity: 1,
    });
    extraParking.setMap(map);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.gridItemOne}>
          <span className={styles.footerHeading}>Locate Us</span>
          <p>
            Massage On Main is located at 2602 W Main St, Richmond VA 23220 in
            the Imago Salon building. There is parking in the back and an
            additional parking lot across Robinson. Our additional parking lot
            is cement paved and located behind Main St and Floyd, and Robinson
            and Davis. Parking is marked in green on the map.
          </p>
          <span className={styles.footerHeading}>Business Hours</span>
          <ul style={{ padding: 0, listStyleType: "none" }}>
            <li style={{ paddingBottom: "16px" }}>
              <span>Monday - Friday: 9AM - 10PM</span>
            </li>
            <li style={{ padding: 0, listStyleType: "none" }}>
              <span>Saturday - Sunday: 10AM - 7PM</span>
            </li>
          </ul>
          <span className={styles.footerHeading}>Connect With Us</span>
          <ul style={{ padding: 0, listStyleType: "none" }}>
            <li style={{ paddingBottom: "16px" }}>
              <Link href="https://www.facebook.com/massageonmainrva" passHref>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    margin: 0,
                    gap: "6px",
                  }}
                >
                  <span style={{ margin: 0 }}>Facebook</span>
                  <GoLinkExternal />
                </a>
              </Link>
            </li>
            <li style={{ padding: 0, listStyleType: "none" }}>
              <Link href="https://www.instagram.com/massageonmainrva/" passHref>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    margin: 0,
                    gap: "6px",
                  }}
                >
                  <span style={{ margin: 0 }}>Instagram</span>
                  <GoLinkExternal />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div styles={styles.gridItemTwo}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: mapData.apiKey,
            }}
            defaultCenter={mapData.center}
            defaultZoom={mapData.zoom}
            options={createMapOptions}
            yesIWantToUseGoogleMapApiInternals //this is important!
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <div lat={mapData.business.lat} lng={mapData.business.lng}>
              <GoLocation size="16px" color="#158ba8" />
            </div>
          </GoogleMapReact>
        </div>
      </div>

      <div className={styles.copyright}>
        <span style={{ fontSize: "12px" }}>
          <Link href="/privacy-policy">
            <a style={{ fontSize: "12px" }}>Privacy Policy</a>
          </Link>{" "}
          | © {new Date().getFullYear()} Massage On Main LLC
        </span>
      </div>
    </footer>
  );
}
