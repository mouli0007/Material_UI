// Example 1

<Button
        variant="contained"
        sx={{
          backgroundColor: "tomato",
          color: "#fff",
          margin: 5,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
            transition: "0.3s ease-in",
          },

          "&:disabled": {
            backgroundColor: "red",
            color: "white",
          },
        }}
      >
        My Unique Button
      </Button>
