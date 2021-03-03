import React from "react"
import { Helmet } from "react-helmet"

const Base = () => {
    return (
        <Helmet>
            {/* Set bootstrap CDN */}
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
            />

            {/* Set slick carousel CDN */}
            <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />

            {/* Set slick carousel theme CDN */}
            <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            
            {/* Set background color */}
            { <style>{'body { background-color: #292b2c; }'}</style> }
        </Helmet>
      )
}

export default Base