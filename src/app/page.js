// app/page.tsx

"use client";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      <section className="grid grid-cols-2 gap-8 p-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-semibold mb-4">News</h2>
          <p className="mb-6 text-gray-600">
            This Autumn, the artist goes international with the Life and the
            Land European tour.
          </p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
            Read more
          </button>
        </div>

        {/* Artist Image */}
        <div className="flex items-center justify-center">
          <img
            src="/path-to-artist-photo.jpg"
            alt="Artist"
            className="w-72 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Gig Section */}
        <div className="flex items-center justify-center">
          <img
            src="/path-to-gig-photo.jpg"
            alt="Gig Image"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-semibold mb-4">Gigs</h2>
          <p className="mb-6 text-gray-600">
            Find out when the artist is coming to a town near you.
          </p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
            Read more
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center space-x-6 p-6 border-t border-gray-200">
        <a href="#" aria-label="Website">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
        <a href="#" aria-label="Apple Music">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
      </footer>
    </main>
  );
}
