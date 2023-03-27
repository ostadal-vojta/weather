import { LocationData } from "@/types/Location";
import { Button } from "antd";
import { useState } from "react";
import { DeleteOutlined } from '@ant-design/icons';

type LocationListItemProps = {
    location: LocationData;
    onClick: () => void;
}

const LocationListItem = (props: LocationListItemProps) => {
    const { location, onClick } = props;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div style={{ padding: '.5rem', display: 'flex', justifyContent: 'space-between', height: 24 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span style={{ marginLeft: '1rem' }}>
                Latitude: {location.latitude} Longitude: {location.longitude}
            </span>
            <span style={{ marginRight: '1rem' }}>
                {location?.temperature} °C
                {isHovered && (
                    <Button type="link" size="small" danger style={{ marginLeft: '1rem' }} onClick={onClick}><DeleteOutlined /></Button>
                )}
            </span>
        </div>
    )
}

export default LocationListItem