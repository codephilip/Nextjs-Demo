import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";

const Index = ({ logs }) => {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/crud");
  const { data } = await res.json();

  return { logs: data };
};

export default Index;
