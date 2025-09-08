import { supabase } from '@/lib/supabaseClient';
import { Competition } from '@/types/competition';
import { User } from '@/types/user';

export default async function Home() {
    const { data: competitions, error } = await supabase
      .from('competitions')
      .select('*');

      if (error) {
        console.log('Error gabisa fetch competitions:', error);
        return(
          <div>
            <h1>Error gabisa fetch competitions data</h1>
          </div>
        )
      }


  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>All Competitions:</h1>
        {!competitions || competitions.length == 0  ? (
          <h1>No competition found</h1>
        ) : (
          <div>
            <ul>
              {competitions.map((competitions : Competition) =>(
                <li key={competitions.id}> 
                  <div>
                    <p>Competition Name: {competitions.title}</p>
                    <p>Start Date: {competitions.start_date}</p>
                    <p>End Date: {competitions.end_date}</p>
                    <p>Max Participant: {competitions.max_participants}</p>
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