import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Character { id: number; name: string; bio: string; }
interface Setting { id: number; name: string; description: string; }

const EditBookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // --- STATES ---
  // Book
  const [form, setForm] = useState({ title: '', description: '', progress: 0, cover_url: '' });
  const [coverFile, setCoverFile] = useState<File | null>(null);

  // Characters
  const [characters, setCharacters] = useState<Character[]>([]);
  const [newChar, setNewChar] = useState({ name: '', bio: '' });

  // Settings (Locations)
  const [settings, setSettings] = useState<Setting[]>([]);
  const [newSetting, setNewSetting] = useState({ name: '', description: '' });

  // Worldbuilding
  const [world, setWorld] = useState({ magic: '', history: '', culture: '', map_url: '' });
  const [mapFile, setMapFile] = useState<File | null>(null);

  // --- 1. FETCH DATA ---
  const fetchBookData = () => {
    fetch(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Book not found");
        return res.json();
      })
      .then((data) => {
        setForm({
          title: data.title,
          description: data.description,
          progress: data.progress,
          cover_url: data.cover_url
        });
        setCharacters(data.characters || []);
        setSettings(data.settings || []);

        // Handle Worldbuilding (it might be null if new book)
        if (data.worldbuilding) {
          setWorld({
             magic: data.worldbuilding.magic || '',
             history: data.worldbuilding.history || '',
             culture: data.worldbuilding.culture || '',
             map_url: data.worldbuilding.map_url || '' // We need to make sure backend sends this!
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate('/admin');
      });
  };

  useEffect(() => { fetchBookData(); }, [id, navigate]);

  // --- 2. HANDLERS: BOOK ---
  const handleBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('progress', String(form.progress));
    if (coverFile) formData.append('cover', coverFile);

    await fetch(`http://localhost:3000/api/books/${id}`, { method: 'PATCH', body: formData });
    alert('Book updated!');
  };

  // --- 3. HANDLERS: CHARACTERS ---
  const handleAddCharacter = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/characters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ character: { ...newChar, book_id: id } })
    });
    setNewChar({ name: '', bio: '' });
    fetchBookData();
  };

  const handleDeleteCharacter = async (charId: number) => {
    if(window.confirm("Remove?")) {
      await fetch(`http://localhost:3000/api/characters/${charId}`, { method: 'DELETE' });
      fetchBookData();
    }
  };

  // --- 4. HANDLERS: SETTINGS (LOCATIONS) ---
  const handleAddSetting = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ setting: { ...newSetting, book_id: id } })
    });
    setNewSetting({ name: '', description: '' });
    fetchBookData();
  };

  const handleDeleteSetting = async (settingId: number) => {
    if(window.confirm("Remove location?")) {
      await fetch(`http://localhost:3000/api/settings/${settingId}`, { method: 'DELETE' });
      fetchBookData();
    }
  };

  // --- 5. HANDLERS: WORLDBUILDING ---
  const handleWorldSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('magic', world.magic);
    formData.append('history', world.history);
    formData.append('culture', world.culture);
    if (mapFile) formData.append('map', mapFile);

    // Note: We use the Book ID to find the worldbuilding record
    const res = await fetch(`http://localhost:3000/api/worldbuildings/${id}`, {
      method: 'PUT',
      body: formData
    });

    if (res.ok) alert("World details saved!");
    else alert("Failed to save world details");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 w-full">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* === SECTION 1: BOOK DETAILS === */}
        <div className="bg-card shadow-card p-8 rounded-2xl border border-gray-100">
           <h2 className="text-3xl font-bold font-header text-primary mb-6">Edit Book</h2>
           <form onSubmit={handleBookSubmit} className="space-y-4">
              <input type="text" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="input-field w-full p-3 border rounded" placeholder="Title" />
              <textarea value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="input-field w-full p-3 border rounded" rows={3} placeholder="Description" />
              <div className="flex gap-4 items-center">
                 <img src={form.cover_url} className="w-16 h-24 object-cover rounded" />
                 <input type="file" onChange={(e) => e.target.files && setCoverFile(e.target.files[0])} />
              </div>
              <input type="range" value={form.progress} onChange={(e) => setForm({...form, progress: Number(e.target.value)})} className="w-full" />
              <button type="submit" className="btn-primary w-full py-2 bg-gray-900 text-white rounded">Save Book Details</button>
           </form>
        </div>

        {/* === SECTION 2: CHARACTERS & LOCATIONS (Grid Layout) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CHARACTERS */}
            <div className="bg-card shadow-card p-6 rounded-2xl border border-gray-100">
               <h3 className="text-xl font-bold mb-4">Characters</h3>
               <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                  {characters.map(c => (
                     <div key={c.id} className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>{c.name}</span>
                        <button onClick={() => handleDeleteCharacter(c.id)} className="text-red-500 text-xs">Del</button>
                     </div>
                  ))}
               </div>
               <form onSubmit={handleAddCharacter} className="space-y-2">
                  <input placeholder="Name" value={newChar.name} onChange={e => setNewChar({...newChar, name: e.target.value})} className="w-full p-2 border rounded" required />
                  <input placeholder="Bio" value={newChar.bio} onChange={e => setNewChar({...newChar, bio: e.target.value})} className="w-full p-2 border rounded" required />
                  <button className="w-full py-2 bg-accent/10 text-accent font-bold rounded">+ Add Character</button>
               </form>
            </div>

            {/* LOCATIONS (SETTINGS) */}
            <div className="bg-card shadow-card p-6 rounded-2xl border border-gray-100">
               <h3 className="text-xl font-bold mb-4">Locations</h3>
               <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                  {settings.map(s => (
                     <div key={s.id} className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>{s.name}</span>
                        <button onClick={() => handleDeleteSetting(s.id)} className="text-red-500 text-xs">Del</button>
                     </div>
                  ))}
               </div>
               <form onSubmit={handleAddSetting} className="space-y-2">
                  <input placeholder="Location Name" value={newSetting.name} onChange={e => setNewSetting({...newSetting, name: e.target.value})} className="w-full p-2 border rounded" required />
                  <input placeholder="Description" value={newSetting.description} onChange={e => setNewSetting({...newSetting, description: e.target.value})} className="w-full p-2 border rounded" required />
                  <button className="w-full py-2 bg-accent/10 text-accent font-bold rounded">+ Add Location</button>
               </form>
            </div>
        </div>

        {/* === SECTION 3: WORLDBUILDING & MAP === */}
        <div className="bg-card shadow-card p-8 rounded-2xl border border-gray-100">
           <h2 className="text-3xl font-bold font-header text-primary mb-6">Worldbuilding</h2>
           <form onSubmit={handleWorldSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="space-y-2">
                    <label className="font-bold text-sm">Magic System</label>
                    <textarea value={world.magic} onChange={e => setWorld({...world, magic: e.target.value})} className="w-full p-3 border rounded h-32" />
                 </div>
                 <div className="space-y-2">
                    <label className="font-bold text-sm">History</label>
                    <textarea value={world.history} onChange={e => setWorld({...world, history: e.target.value})} className="w-full p-3 border rounded h-32" />
                 </div>
                 <div className="space-y-2">
                    <label className="font-bold text-sm">Culture</label>
                    <textarea value={world.culture} onChange={e => setWorld({...world, culture: e.target.value})} className="w-full p-3 border rounded h-32" />
                 </div>
              </div>

              <div className="border-t pt-6">
                 <label className="font-bold text-lg mb-2 block">World Map</label>
                 <div className="flex gap-6 items-start">
                    {/* Show existing map if we have the URL but haven't picked a new file yet */}
                    {/* Note: You need to update your Backend BookController to send worldbuilding.map_url inside the JSON! */}
                    <div className="w-1/3 aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden border">
                       {mapFile ? <span className="text-xs text-center p-2">New: {mapFile.name}</span> :
                        world.map_url ? <img src={world.map_url} className="w-full h-full object-cover" /> :
                        <span className="text-gray-400">No Map Uploaded</span>
                       }
                    </div>
                    <div className="flex-1">
                       <input type="file" accept="image/*" onChange={e => e.target.files && setMapFile(e.target.files[0])} className="w-full p-3 border rounded bg-white" />
                       <p className="text-xs text-secondary mt-2">Upload a high-res image of your world map.</p>
                    </div>
                 </div>
              </div>

              <button type="submit" className="btn-primary w-full py-3 bg-gray-900 text-white rounded">Save World Details</button>
           </form>
        </div>

      </div>
    </div>
  );
};

export default EditBookForm;
