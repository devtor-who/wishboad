import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { getDb } from "~/libs/db";

export const useGetUsers = routeLoader$(async (requestEvent) => {
  const { DB } = requestEvent.platform as unknown as { DB: D1Database };
  const db = getDb(DB);
  const users = await db.query.users.findMany();
  return users;
});

export default component$(() => {
  const users = useGetUsers();
  return (
    <section>
      <h1>User's directory</h1>
      <ul>
        {users.value.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>
              {user.name} ({user.email})
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
});
