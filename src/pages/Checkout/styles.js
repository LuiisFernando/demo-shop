import { makeStyles } from '@material-ui/core'; 
import { theme } from '../../styles/global';

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        height: '100%'
    },
    carSide: {
        background: theme.colors.background,
        paddingTop: '54px',
        paddingLeft: '68px'
    },
    cardInfo: {
        marginTop: '50px',
        marginLeft: '70px',
        display: 'flex',
        flexDirection: 'row',
    },
    cardTitle: {
        fontFamily: 'Verdana, Bold',
        fontSize: '20px',
        color: '#FFF',
        marginLeft: '15px'
    },
    infoSide: {
        background: '#FFF',
        padding: '50px 50px 0 250px'
    },
    button: {
        background: '#DE4B4B',
        width: '246px',
        height: '51px',
        borderRadius: '10px',
        color: '#FFF',
        '&:hover': {
            background: '#ad4b4b'
        }
    }
});