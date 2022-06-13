import React from 'react'
import styles from '../../../styles/contact/Map.module.css'

function MapSection() {
    return (
        <div className={styles['map']}>
            {/* <iframe width="100%" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">fitness tracker</a></iframe> */}
            {/* <iframe width="100%" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=681%20Saint%20Clair%20Street%20PO%20BOX%20360083%20Melbourne,%20FL%2032936+(Dotcom%20Reps)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe> */}
            <iframe width="100%" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=681 Saint Clair Street Melbourne, FL&amp;ie=UTF8&amp;&amp;output=embed"></iframe>
        </div>
    )
}

export default MapSection
