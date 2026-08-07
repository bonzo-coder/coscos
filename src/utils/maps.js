const addressQuery = "Nefrytowa 12, 05-500 Piaseczno";

export function getMapsUrl() {
  const encodedAddress = encodeURIComponent(addressQuery);

  if (typeof navigator !== "undefined") {
    const userAgent = navigator.userAgent || "";
    const isAppleDevice = /iPhone|iPad|iPod|Macintosh/i.test(userAgent);

    if (isAppleDevice) {
      return `https://maps.apple.com/?q=${encodedAddress}`;
    }
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}
