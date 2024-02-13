import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

export default function ProductPagination() {
    const {product} = useProduct()
    const{setPage,count,currentPage} = useProduct()

    function hendleCange(p,n) {
      setPage(n)
    }


    
  return (
    <Box className="container" sx={{display:"flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px", marginBottom: "20px"}}>
      <h2>New Releases({product.length})</h2>
        <Pagination onChange={hendleCange} count={count} color="primary" />
      <div className="filter" style={{display: "flex", gap: "20px"}}>
        <h4>Hide Filters</h4>
        <h4>Sort By</h4>
      </div>  
    </Box>
  );
}
