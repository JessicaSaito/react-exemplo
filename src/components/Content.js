import Box from '@mui/material/Box'
import Alert from './Alert'

const Content = () => {

    return (
        <Box sx={{
            background: "#EEE",
            width: 500,
            height: 500,
            padding: '15px'
        }}>
            <h1>Content</h1>

            <Alert type="success" typeIcon="success">
                Deu certo!
            </Alert>

            <Alert type="error" typeIcon="error">
                Deu Erro!
            </Alert>

            <Alert type="info" typeIcon="info">
                Info!
            </Alert>

            <Alert type="warning" typeIcon="warning">
                Warning!
            </Alert>

        </Box>
    )
}

export default Content