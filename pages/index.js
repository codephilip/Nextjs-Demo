import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = ({ logs }) => {
  return (
    <div>
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
