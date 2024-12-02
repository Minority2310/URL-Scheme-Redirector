export function convertToRedirectUrl(schemeUrl) {
  const baseUrl = window.location.origin;
  const encodedUrl = encodeURIComponent(schemeUrl);
  return `${baseUrl}/redirect?location=${encodedUrl}`;
}