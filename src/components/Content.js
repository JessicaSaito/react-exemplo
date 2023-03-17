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

            <Alert type="success">
                Deu certo!
            </Alert>
            <br />

            <Alert type="error">
                Deu Erro!
            </Alert>
            <br />

            <Alert type="info">
                Info!
            </Alert>
            <br />

            <Alert type="warning">
                Warning!
            </Alert>
            <br />
        </Box>
    )
}

export default Content