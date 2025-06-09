import { useEffect, useState } from "react"
import NewItem from "../sections/NewItem";
import Airtable from 'airtable';

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = 'News'; 


const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

const GolfNew = () => {
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
        // view: 'Grid view' // Specify a particular view
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
        }
      );
  }, []); // Empty dependency array means this effect runs once on component mount

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <h2 className="text-center">Golf <span className="badge bg-danger">News</span></h2>
        {records.map((news, index) =>{
            return <NewItem key={index} title={news.fields.Title} description = {news.fields.Content} src={news.fields.Cover[0]['url']} url={news.fields.SourceUrl} />
        })}
    </div>
  )
}

export default GolfNew