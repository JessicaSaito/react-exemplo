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
    success: <IconSuccess style={{ color: '#2f7441' }} />,
    error: <IconError style={{ color: '#bd2626' }} />,
    info: <IconInfo style={{ color: '#244a70' }} />,
    warning: <IconWarning style={{ color: '#b7852a' }} />
}

const Alert = ({ type, children }) => {

    const bg = {
        background: typeColor[type],
        padding: '20px',
        borderRadius: '10px'
    }

    return (
        <div style={bg}>
            {typeIcon[type]}
            <span>{children}</span>
        </div>
    )
}

export default Alert