import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "nike", name: "Nike" },
    { id: "olympus", name: "Olympus" },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <h3>e.g. List of all clients</h3>

      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[clientid]",
                  query: {
                    clientid: client.id,
                  },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
