import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { test } from "src/api/Queries";

interface ShopProps {}

const Shop: React.FC<ShopProps> = ({}) => {
  // const [data, setData] = useState({});

  // const { data } = useQuery("shithead", test);

  return (
    <Container className="pt-4">
      <h1>Shop</h1>
    </Container>
  );
};

export default Shop;
