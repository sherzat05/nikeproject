import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

const ProductCard = ({ i }) => {
  const { deleteProduct,readProduct,currentPage,products } = useProduct();
  const { id } = useParams();

  return (

    
    <Card sx={{ width: 370 }}>
      <CardMedia sx={{ height: 340 }} image={i.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {i.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {i.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {i.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <EditIcon />
        </Button>
        <Button onClick={() => deleteProduct(i.id)} size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
