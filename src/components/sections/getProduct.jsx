import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import Airtable from "airtable";

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY_PRODUCT;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID_PRODUCT;
const AIRTABLE_TABLE_NAME = "SanPham";

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

const GetProduct = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    base(AIRTABLE_TABLE_NAME)
      .select({
        // Optional: specify fields, sorting, filtering, etc.
        // For example, to sort by a 'Name' field:
        // sort: [{ field: 'Name', direction: 'asc' }],
        // maxRecords: 10, // Limit the number of records
        // view: 'Daily new' // Specify a particular view
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function will be called for each page of records.
          setRecords((prevRecords) => [...prevRecords, ...records]);
          fetchNextPage(); // Fetch the next page of records
        },
        function done(err) {
          if (err) {
            console.error(err);
            setError(err);
          }
          setLoading(false);
        },
      );
  }, []); // Empty dependency array means this effect runs once on component mount

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-16">
      <h2 className="text-center">
        San pham <span className="badge bg-danger">Gom su</span>
      </h2>
      {records.map((product, index) => {
        return (
          <ProductCard
            key={index}
            name={product.fields.Name}
            description={product.fields.Descriptions}
            image={product.fields.Image[0]["url"]}
            link={product.fields.Link}
          />
        );
      })}
    </div>
  );
};

export default GetProduct;
