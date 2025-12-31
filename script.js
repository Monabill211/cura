function bookNow(service) {
  const number = "201021219588"; // غيره لرقمك
  const msg = `طلب ${service}`;
  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}














