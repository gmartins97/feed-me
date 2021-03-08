import * as React from "react"

import FlagIconFactory from 'react-flag-icon-css'

const FlagIcon = FlagIconFactory(React, { useCssModules: false })

const flags = [
    'pt',
    'gb',
    'es',
    'fr',
    'it',
    'de',
]

const Flags = () => (
    <div>
        {flags.map(flag => <FlagIcon code={flag} size='2x' />)}
    </div>
)

export default Flags