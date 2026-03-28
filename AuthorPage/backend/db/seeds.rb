# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
GuestbookEntry.create([
  { name: 'RetroFan', message: 'Love the 90s vibe!' },
  { name: 'PortalLad', message: 'Can’t wait for the book!' }
])

VisitorCount.create(count: 100)

# db/seeds.rb
puts "Seeding database..."

# Clear existing data to avoid duplicates
Book.destroy_all
Character.destroy_all
Setting.destroy_all
Worldbuilding.destroy_all

# Book 1: Suraido (Fantasy)
book1 = Book.create!(
  title: "Suraido",
  description: "A fantasy epic of mythical creatures and ancient magic.",
  cover_url: "https://www.freepik.com/free-photo/black-yellow-hardback-book_1070277.htm#fromView=keyword&page=1&position=48&uuid=70819dc7-794c-4332-aefe-b475544ce539&query=Book+Placeholder",
  progress: 40
)
book1.characters.create!([
  { name: "Kael", image: "https://via.placeholder.com/200", bio: "A dragon rider with a mysterious past." },
  { name: "Sylvara", image: "https://via.placeholder.com/200", bio: "A sorceress wielding elemental magic." }
])
book1.settings.create!([
  { name: "Drakehold", description: "A mountain fortress guarded by dragons." },
  { name: "Mistwood", description: "A forest shrouded in magical fog." }
])
book1.create_worldbuilding!(
  magic: "Magic flows from ancient runes scattered across the land.",
  history: "A war between dragons and humans fractured the realm.",
  culture: "Festivals celebrate the harmony of magic and nature."
)

# Book 2: Claire and the Brass King (Steampunk)
book2 = Book.create!(
  title: "Claire and the Brass King",
  description: "A steampunk adventure in a clockwork city.",
  cover_url: "https://www.freepik.com/free-vector/magic-book-cartoon-style-isolated_11830040.htm#fromView=search&page=1&position=3&uuid=39b296a2-5008-44e9-9a00-6b6efdce36c0&query=Book+Placeholder+steam",
  progress: 5
)
book2.characters.create!([
  { name: "Claire", image: "https://via.placeholder.com/200", bio: "An inventive engineer with a knack for gears." },
  { name: "Brass King", image: "https://via.placeholder.com/200", bio: "A mysterious ruler of the mechanical city." }
])
book2.settings.create!([
  { name: "Cogspire", description: "A towering city of steam and brass." },
  { name: "Rustvale", description: "A junkyard of discarded machines." }
])
book2.create_worldbuilding!(
  magic: "Steam-powered devices mimic magical effects.",
  history: "The rise of machines displaced ancient magic.",
  culture: "Inventors are revered as modern alchemists."
)

# Book 3: Vibrations (Mystery)
book3 = Book.create!(
  title: "Vibrations",
  description: "A mystery unraveling secrets through sound and resonance.",
  cover_url: "https://www.freepik.com/free-vector/magic-book-cartoon-style-isolated_11830040.htm#fromView=search&page=1&position=3&uuid=39b296a2-5008-44e9-9a00-6b6efdce36c0&query=Book+Placeholder+steam",
  progress: 1
)
book3.characters.create!([
  { name: "Elara", image: "https://via.placeholder.com/200", bio: "A detective who hears hidden frequencies." },
  { name: "Milo", image: "https://via.placeholder.com/200", bio: "A musician with a dark secret." }
])
book3.settings.create!([
  { name: "Echo City", description: "A metropolis where sound shapes reality." },
  { name: "Silent Hollow", description: "A quiet village hiding dark truths." }
])
book3.create_worldbuilding!(
  magic: "Vibrational energy manipulates matter and minds.",
  history: "A lost civilization mastered sound-based technology.",
  culture: "Music is sacred, used in rituals and governance."
)

# Book 4: Through the Starlit Portal (Portal Fantasy)
book4 = Book.create!(
  title: "Through the Starlit Portal",
  description: "A thrilling portal fantasy where Jet, Aria, and Kiyo uncover secrets in a magical world.",
  cover_url: "https://via.placeholder.com/300x450",
  progress: 75
)
book4.characters.create!([
  { name: "Jet", image: "https://via.placeholder.com/200", bio: "A quick-witted leader with green sparks." },
  { name: "Aria", image: "https://via.placeholder.com/200", bio: "A mage weaving light into spells." },
  { name: "Kiyo", image: "https://via.placeholder.com/200", bio: "A stealthy scout with knowledge of the plains." }
])
book4.settings.create!([
  { name: "Lantern Village", description: "A village lit by enchanted lanterns." },
  { name: "Starlit Plains", description: "Grasslands with hidden portals." }
])
book4.create_worldbuilding!(
  magic: "Portals powered by starlight crystals.",
  history: "Portals united the world until a schism.",
  culture: "Starlit Festival honors portals."
)

puts "Seeding complete!"
