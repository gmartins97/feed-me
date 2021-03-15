// import * as React from "react"

// import FlagIconFactory from 'react-flag-icon-css'
// import { useState } from "react"
// import Select from '@material-ui/core/Select'
// import MenuItem from '@material-ui/core/MenuItem'
// import { makeStyles } from '@material-ui/core/styles'
// import { useTranslation } from "react-i18next"

// const FlagIcon = FlagIconFactory(React, { useCssModules: false })

// const useStyles = makeStyles({
//     selectFocus: {
//         "&:focus": {
//             background: 'transparent'
//         }
//     }
// })

// const countries = [
//     {
//         value: 'pt',
//         code: 'pt'
//     },
//     {
//         value: 'en',
//         code: 'gb'
//     },
//     {
//         value: 'es',
//         code: 'es'
//     },
//     {
//         value: 'fr',
//         code: 'fr'
//     },
//     {
//         value: 'it',
//         code: 'it'
//     },
//     {
//         value: 'de',
//         code: 'de'
//     },
// ]

// const Flags = (props) => {
//     const { i18n } = useTranslation()
//     const classes = useStyles()

//     const [values, setValues] = useState({
//         language: 'pt'
//     });

//     function handleChange(event) {
//         i18n.changeLanguage(event.target.value)

//         setValues(oldValues => ({
//             ...oldValues,
//             [event.target.name]: event.target.value,
//         }));
//     }

//     return (
//         <Select
//             value={values.language}
//             onChange={(e) => handleChange(e)}
//             disableUnderline
//             inputProps={{
//                 name: 'language'
//             }}
//             classes={{
//                 select: classes.selectFocus
//             }}
//         >
//             {countries.map(country => <MenuItem value={country.value}><FlagIcon code={country.code} size='1x' /></MenuItem>)}
//         </Select>
//     )
// }

// export default Flags