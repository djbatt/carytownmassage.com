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
      lat: 37.55462875256322,
      lng: -77.48456310462822,
    },
    zoom: 19,
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  };
  const handleApiLoaded = (map, maps) => {
    const buildingCoords = [
      { lat: 37.55491653623035, lng: -77.48443587452248 },
      { lat: 37.55488623540266, lng: -77.48435004383563 },
      { lat: 37.55461441568619, lng: -77.48450081365147 },
      { lat: 37.55464547891889, lng: -77.48458420318325 },
    ];

    var building = new maps.Polygon({
      paths: buildingCoords,
      strokeColor: "#ff6f61",
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: "#ff6f61",
      fillOpacity: 1,
    });
    building.setMap(map);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.gridItemOne}>
          <span className={styles.footerHeading}>Locate Us</span>
          <p>
            Carytown Massage is located at 3316 W Cary St, Richmond VA 23221 inside the StylePod building, we are in unit 104. There is free parking available in the back and paid parking available in the parking garage behind our building.
            Our building marked in pink on the map.
          </p>
          <p>Any missed calls will usually be returned within the hour. Feel free to text us at (804) 424-2607 with any questions you may have.</p>
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
          <ul className={styles.connectUnorderedList}>
            <li className={styles.connectListItem}>
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
                  <GoLinkExternal style={{ margin: "auto" }} />
                </a>
              </Link>
            </li>
            <li className={styles.connectListItem}>
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
                  <GoLinkExternal style={{ margin: "auto" }} />
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
          </GoogleMapReact>
        </div>
      </div>

      <div className={styles.copyright}>
        <span style={{ fontSize: "12px" }}>
          <Link href="/privacy-policy">
            <a style={{ fontSize: "12px" }}>Privacy Policy</a>
          </Link>{" "}
          | © {new Date().getFullYear()} Carytown Massage
        </span>
      </div>
    </footer>
  );
}
