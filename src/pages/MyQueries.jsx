import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ProductCard from "../components/ProductCard";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/addQueries/${user?.email}`).then((res) => {
      setQueries(res.data);
    });
  }, [queries, user]);
  return (
    <div className="lg:px-16 md:px-8 px-2">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10 md:px-5 px-2 md:my-10 my-5">
        {queries.map((query) => (
          <ProductCard
            key={query._id}
            setQueries={setQueries}
            query={query}
            queries={queries}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
