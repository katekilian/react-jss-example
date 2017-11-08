export default {
  buttonBase: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 6,
    height: 80,
    width: 240,
    fontSize: 24,
    color: 'white',
  },
  buttonLight: {
    extend: 'buttonBase',
    backgroundColor: 'rgb(52, 104, 188)',
    '&:hover': {
      backgroundColor: 'rgba(52, 104, 188, 0.9)',
    },
  },
  buttonDark: {
    extend: 'buttonBase',
    backgroundColor: 'rgb(2, 124, 61)',
    '&:hover': {
      backgroundColor: 'rgba(2, 124, 61, 0.9)',
    },
  },
}
