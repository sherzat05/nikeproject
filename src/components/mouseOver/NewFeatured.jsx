import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import "./NewFeatured.css";
import { Link } from "react-router-dom";

const NewFeatured = ({mousenpmOver, set}) => {
  const f_one = [
    " Valentine's Day Shop",
    "Shop All ❤️",
    "Gifts for Sneakerheads",
    "Gifts Under $30",
    "",
    "",

    "Limited Time",
    "Last Chance Sale: Up to 40%",
    "Off",
  ];

  const f_two = [
    " New & Featured",
    "",
    "New Arrivals",
    "Best Sellers",
    "Member Product",
    "New & Upcoming Drops",
    "SNKRS Launch Calendar",
    "Nike Tech",
  ];

  const f_three = [
    "Shop Icons",
    "",
    "Air Jordan 1",
    "Air Force",
    "Dunk",
    "Air Max",
    "Blazer",
    "Pegasus",
    "Metcon",
    "LeBron",
  ];

  const f_four = [
    "New For Men",
    "Shoes",
    "Clothing",
    "",
    "",
    "New For Women",
    "Shoes",
    "Clothing",
    "",
    "",
    "New For Kids",
    "Shoes",
    "Clothing",
  ];

  const f_five = [
    "Jordan",
    "",
    "Shop All",
    "Latest in Jordan",
    "Men",
    "Women",
    "Kids",
    "Basketball",
  ];
  return (
  
    <>
      <Link onMouseLeave={()=> set(0)}>New & Featured</Link>
      <Box id="featured">
        <Box className="container">
          <Box className="featured">
            <Box className="featured_one">
              <List>
                {f_one.map((i, index) => (
                  <ListItem
                    sx={{
                      color: " #707072",
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontSize: "16px",
                    }}
                    key={index}
                  >
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box className="feutered_two">
              <List>
                {f_two.map((i, index) => (
                  <ListItem
                    sx={{
                      color: " #707072",
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontSize: "16px",
                    }}
                    key={index}
                  >
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box className="feuter_three">
              <List>
                {f_three.map((i, index) => (
                  <ListItem
                    sx={{
                      color: " #707072",
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontSize: "16px",
                    }}
                    key={index}
                  >
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box className="feuter_four">
              <List>
                {f_four.map((i, index) => (
                  <ListItem
                    sx={{
                      color: " #707072",
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontSize: "16px",
                    }}
                    key={index}
                  >
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box className="feuter_five">
              <List>
                {f_five.map((i, index) => (
                  <ListItem
                    sx={{
                      color: " #707072",
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontSize: "16px",
                    }}
                    key={index}
                  >
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewFeatured;
