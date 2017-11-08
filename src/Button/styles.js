export default {
  buttonBase: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 46,
    width: 150,
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
