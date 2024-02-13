import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import UpNavbar from "../Navbar/UpNavbar";
import NavbarTest from "../Navbar/NavbarTest";
import NavbarCarusel from "../Navbar/NavbarCarusel";
import Footer from "../Footer/Footer";
import { useProduct } from "../../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const { addProduct } = useProduct();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [img, setImg] = useState("");

  function hendleChane() {
    let newObj = {
      name: name,
      price: price,
      type: type,
      img: img,
    };
    addProduct(newObj);
  }
  return (
    <>
      <UpNavbar />
      <NavbarTest />
      <NavbarCarusel />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
          />
          <Link to="/">
            <Box sx={{display: "flex" , flexDirection: 'column' , gap: "10px"}}>
              <Button
                onClick={hendleChane}
                sx={{
                  color: "#000",
                  border: "1px solid #000",
                  fontWeight: "bold",
                  background: "transparent",
                  "&:hover": {
                    background: "#000",
                    color: "#fff",
                  },
                }}
                variant="contained"
              >
                add Shoes
              </Button>
              <Button
                onClick={()=> navigate("/")}
                sx={{
                  color: "#000",
                  border: "1px solid #000",
                  fontWeight: "bold",
                  background: "transparent",
                  "&:hover": {
                    background: "#000",
                    color: "#fff",
                  },
                }}
                variant="contained"
              >
                back to cards
              </Button>
            </Box>
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Admin;
