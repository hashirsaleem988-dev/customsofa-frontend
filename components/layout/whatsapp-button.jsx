
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966550834729"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      {/* Official WhatsApp Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path d="M16.04 3C9.1 3 3.45 8.64 3.45 15.58c0 2.22.59 4.39 1.72 6.31L3.4 28.9l7.17-1.88a12.55 12.55 0 0 0 5.47 1.26h.01c6.94 0 12.58-5.64 12.59-12.58 0-3.36-1.31-6.52-3.69-8.9A12.5 12.5 0 0 0 16.04 3Zm0 23.16h-.01c-1.75 0-3.47-.47-4.97-1.36l-.36-.21-4.26 1.12 1.14-4.15-.24-.38a10.46 10.46 0 0 1-1.61-5.6c0-5.69 4.63-10.32 10.32-10.32 2.76 0 5.36 1.08 7.31 3.03a10.25 10.25 0 0 1 3.02 7.31c0 5.69-4.63 10.32-10.32 10.32Zm5.66-7.73c-.31-.15-1.83-.9-2.12-1-.29-.11-.49-.15-.7.15-.2.31-.8 1-1 1.2-.19.2-.36.23-.67.08-.31-.15-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.59c-.2 0-.54.08-.82.38-.28.31-1.07 1.05-1.07 2.58s1.1 2.99 1.25 3.2c.15.2 2.17 3.31 5.25 4.64.73.31 1.3.5 1.75.64.74.24 1.42.21 1.95.13.59-.09 1.83-.75 2.09-1.48.26-.74.26-1.37.18-1.5-.08-.13-.28-.2-.59-.36Z" />
      </svg>

      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#172433] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
