import { makeStyles } from '@material-ui/core'; 
import { theme } from '../../styles/global';

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        height: '100%',
        
    },
    textoAlterar: {
        color: '#FFf',
        '@media (max-width: 414px)': {
            display: 'none'   
        }
    },
    card: {
        marginTop: '30px', 
        marginLeft: '70px',
        '@media (max-width: 960px)': {
            marginLeft: '0',
        }
    },
    carSide: {
        background: theme.colors.background,
        paddingTop: '54px',
        paddingLeft: '68px',
        '@media (max-width:1000px)': { 
            // background: 'yellow',
            paddingLeft: '0'
          }
    },
    cardInfo: {
        marginTop: '50px',
        marginLeft: '70px',
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width:414px)': { 
            margin: '50px 30px 0 50px'
          }
    },
    cardTitle: {
        fontFamily: 'Verdana, Bold',
        fontSize: '20px',
        color: '#FFF',
        marginLeft: '15px',
        // '@media (max-width: 414px)': {
        //     margin: '30px 30px 0 30px'
        // }
    },
    circledNumber: {
        color: 'red',
        width: '25px',
        height: '25px',
        border: '1px solid #f44336',
        borderRadius: '50%',
        paddingLeft: '7px',
        paddingTop: '2px',
        fontFamily: 'Verdana Semibold',
        fontSize: '13px',
    },
    passos: {
        '@media (max-width: 968px)': {
            display: 'none'
        }
    },
    etapa: {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        color: '#FFF',
        fontFamily: 'Verdana Regular',
        fontSize: '13px',
        '@media (min-width: 968px)': {
            display: 'none'
        }
    },
    stepText: {
        marginRight: '10px',
        marginLeft: '10px',
        color: theme.colors.background,
        fontFamily: 'Verdana Regular',
        fontSize: '13px',
        marginTop: '4px'
    },
    step1: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '25px'
    },
    step2: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '25px'
    },
    step3: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '25px'
    },
    infoSide: {
        background: '#FFF',
        padding: '50px 50px 0 250px', // passar ultimo valor pra 45 quando mobile
        '@media (max-width:375px)': { 
            padding: '50px 70px 0 90px'
        },
        '@media (max-width:360px)': { 
            padding: '50px 0 0 90px'
        },
        '@media (max-width:414px)': { 
            padding: '50px 40px 0 60px'
        },
        '@media (max-width:960px)': { 
            padding: '50px 40px 0 60px'
        }
    },
    gridButton: {
        marginTop: '60px',
        justifyContent: 'flex-end',
        '@media (max-width:960px)': { 
            display: 'flex',
            justifyContent: 'center'
        }
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