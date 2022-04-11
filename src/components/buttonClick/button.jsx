import React from 'react';
import "./button.scss";
function button() {
    return (
        <div>
            <form action="./components/geoChart/GeoChart">
                <button type="submit" className="button button2">Click me</button>
            </form>
        </div>
    );
}

export default button;