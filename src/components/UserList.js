import useFetch from "../hooks/useFetch";

function UserList() {
  const { data, error, isLoading } = useFetch("http://localhost:3200/data");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Data: {data}</div>;
  }

  return (
    <ul>
      {
      data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;