import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 7,
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2D42',
        padding: '5px 0'
      },
      heading: {
        color: '#EDF2F4',
        fontSize: '40px',
        fontFamily: 'Questrial'
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')] : {
        mainContainer: {
          flexDirection:"column-reverse",
          padding: '0'
        },
        wrapper:{
          padding:'0px'
        }
      }
}));