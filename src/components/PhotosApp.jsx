export default function PhotosApp() {
  const images = [
    "A tender gift of flowers.png",
    "IMG-20260608-WA0006.jpg",
    "Joyful Birthday Celebration Portrait.png",
    "Platform Portrait_ Pensive Traveler.png",
    "Quiet moment in soft light.png",
    "Romantic sunset in countryside embrace.png",
    "WhatsApp Image 2026-06-10 at 07.39.40.jpeg",
    "a404864e-13ad-4842-ab6f-cc26419a8e51(1).png",
    "e5f21c4e-3e1c-46fb-868a-d180e60e1a1b.png",
    "file_0000000067cc7208816b5f366f8dca3d.png",
    "image(209).png",
    "image(387).png",
    "image(389).png",
    "image(390).png",
    "image(57).png",
    "image-gen-1(10).png",
    "image-gen-1.png"
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {images.map((img, idx) => (
        <div key={idx} style={{ 
          borderRadius: 'var(--rounded-lg)', 
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          <img 
            src={`/images/${img}`} 
            alt={img} 
            style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} 
          />
        </div>
      ))}
    </div>
  )
}
