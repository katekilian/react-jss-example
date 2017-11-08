export default {
  root: {
    display: 'flex',
    margin: 0,
    width: '100%',
    height: '100%',
  },
  half: {
   flexGrow: 1,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   paddingTop: 50,
  },
  lightTheme: {
    extend: 'half',
    backgroundColor: 'white',
  },
  darkTheme: {
    extend: 'half',
    backgroundColor: 'rgb(49, 51, 56)',
  }
}