import { supabase } from '@/lib/supabaseClient';
import { User } from '@/types/user';

export default async function Home() {
    const { data: users, error } = await supabase
      .from('users')
      .select('*');

      if (error) {
        console.log('Error gabisa fetch user:', error);
        return(
          <div>
            <h1>Error gabisa fetch user data</h1>
          </div>
        )
      }

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>All Users:</h1>
        {!users || users.length == 0  ? (
          <h1>No Users found</h1>
        ) : (
          <div>
            <ul>
              {users.map((user : User) =>(
                <li key={user.id}> 
                  <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}