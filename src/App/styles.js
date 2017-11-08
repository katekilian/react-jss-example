export default {
  root: {
    display: 'flex',
    margin: 0,
    width: '100%',
    height: '100%',
  },
  half: {
   flexGrow: 1,
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