import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";

const Index = ({ logs }) => {
  return (
    <div className="logs-container">
      <h1>Logs</h1>
      <div className="grid wrapper">
        {logs.map((log) => {
          return (
            <div key={log._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${log._id}`}>
                      <a>{log.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${log._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${log._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/crud");
  const { data } = await res.json();

  return { logs: data };
};

export default Index;
