import { borderRadius, padding } from "@mui/system"
import { FaRegCheckCircle as IconSuccess } from 'react-icons/fa'
import { VscError as IconError } from 'react-icons/vsc'
import {
    ImInfo as IconInfo,
    ImWarning as IconWarning
} from 'react-icons/im'


const typeColor = {
    success: "#cdefd6",
    error: '#efcdcd',
    info: '#cddeef',
    warning: '#ebe5b7'
}

const typeIcon = {
    success: <IconSuccess />,
    error: <IconError />,
    info: <IconInfo />,
    warning: <IconWarning />
}

const Alert = ({ type, children }) => {

    const bg = {
        background: typeColor[type],
        padding: '20px',
        borderRadius: '10px'
    }

    return (
        <div style={bg}>
            {children}
        </div>
    )
}



export default Alert