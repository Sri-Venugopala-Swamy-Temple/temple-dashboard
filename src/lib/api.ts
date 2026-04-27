const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "API error");
  return data;
}

// Sevas
export const getSevas = (category?: string) =>
  apiFetch<{ success: boolean; data: any[] }>(
    `/api/sevas${category && category !== "all" ? `?category=${category}` : ""}`
  );

// Bookings
export const createBooking = (payload: object) =>
  apiFetch<{ success: boolean; data: any; bookingReference: string }>("/api/bookings", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getBookingByRef = (ref: string) =>
  apiFetch<{ success: boolean; data: any[] }>(`/api/bookings?ref=${ref}`);

// Festivals
export const getFestivals = (featured?: boolean) =>
  apiFetch<{ success: boolean; data: any[] }>(
    `/api/festivals${featured ? "?featured=true" : ""}`
  );

// Contact
export const submitContact = (payload: object) =>
  apiFetch<{ success: boolean; data: any }>("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
