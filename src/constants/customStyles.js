export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "7rem",
    borderRadius: "15px",
    color: "#fff",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    backgroundColor: "#082433",
    cursor: "pointer",
    border: "2px solid #000000",
    ":hover": {
      border: "2px solid #000000",
      boxShadow: "none",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "white",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      width: "100%",
      background: "#031620",
      ":hover": {
        backgroundColor: "#031620",
        color: "#031620",
        cursor: "pointer",
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "#031620",
      maxWidth: "14rem",
      borderRadius: "5px",
      boxShadow: "5px 5px 0px 0px #031620",
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "red",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
    };
  },
};
