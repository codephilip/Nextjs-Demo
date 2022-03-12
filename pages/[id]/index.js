import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Confirm, Button, Loader } from "semantic-ui-react";

const Log = ({ log }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteLog();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);

  const close = () => setConfirm(false);

  const deleteLog = async () => {
    const logId = router.query.id;
    try {
      const deleted = await fetch(`http://localhost:3000/api/crud/${logId}`, {
        method: "Delete",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div className="note-container">
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <h1>{log.title}</h1>
          <p>{log.description}</p>
          <Button color="red" onClick={open}>
            Delete
          </Button>
        </>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
};

Log.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/crud/${id}`);
  const { data } = await res.json();

  return { log: data };
};

export default Log;
