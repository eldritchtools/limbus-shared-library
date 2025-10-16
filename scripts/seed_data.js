import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseApiKey = process.env.SUPABASE_SEEDING_KEY;
const supabase = createClient(supabaseUrl, supabaseApiKey);

const loadJson = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));
const identities = loadJson('./public/data/identities.json');
const egos = loadJson('./public/data/egos.json');

async function seed() {
    console.log('🌱 Seeding identities...');
    const { error: identityError } = await supabase
        .from('identities')
        .upsert(
            Object.entries(identities).map(([id, identity]) => ({
                id: id,
                name: identity.name,
                sinner_id: identity.sinnerId
            })),
            { onConflict: 'id' }
        );

    if (identityError) throw identityError;

    console.log('🌱 Seeding egos...');
    const { error: egoError } = await supabase
        .from('equipment')
        .upsert(
            Object.entries(egos).map(([id, ego]) => ({
                id: id,
                name: ego.name,
                sinner_id: ego.sinnerId
            })),
            { onConflict: 'id' }
        );

    if (egoError) throw egoError;

    console.log('✅ Seeding complete!');
}

seed().catch((err) => {
  console.error('❌ Error seeding database:', err.message);
  process.exit(1);
});
