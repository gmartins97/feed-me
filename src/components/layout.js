import React from "react"
import { withTrans } from '../i18n/withTrans'

const Layout = ({ children, t, i18n }) => {
    return (
        <>
            {/*<Header />*/}
            <div>
                <main>{children}</main>
            </div>
            <footer>
                © {new Date().getFullYear()}, {'feed-me'}
            </footer>
        </>
    )
}

export default withTrans(Layout)