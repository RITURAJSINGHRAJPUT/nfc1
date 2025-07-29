let qr;

function showQR() {
  const url = window.location.href;
  const modal = document.getElementById('qrModal');
  modal.style.display = 'flex';

  if (!qr) {
    qr = new QRious({
      element: document.getElementById('qrCodeCanvas'),
      size: 200,
      value: url
    });
  } else {
    qr.set({ value: url });
  }
}

function hideQR() {
  document.getElementById('qrModal').style.display = 'none';
}

function shareLink() {
  const shareData = {
    title: 'Ajay tiwari’s Links',
    text: 'Check out Ajay tiwari’s links!',
    url: window.location.href,
  };

  if (navigator.share) {
    navigator.share(shareData).catch((err) => console.log('Error sharing:', err));
  } else {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out Ajay tiwari’s links!");
    const links = `
WhatsApp: https://wa.me/?text=${text}%20${url}
LinkedIn: https://www.linkedin.com/sharing/share-offsite/?url=${url}
Facebook: https://www.facebook.com/sharer/sharer.php?u=${url}
Twitter: https://twitter.com/intent/tweet?text=${text}&url=${url}
    `;
    alert("Share this page via:\n\n" + links);
  }
}
