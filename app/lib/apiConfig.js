let API_BASE;

if (typeof window !== "undefined") {
  API_BASE =
    window.location.hostname === 'Essayproficiency.com' ||
    window.location.hostname === 'www.Essayproficiency.com'
      ? 'https://api.Essayproficiency.com'
      : 'http://localhost:5000';
} else {
  // Use environment variable or default for server-side
  API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';
}

export { API_BASE };