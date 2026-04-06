function Loader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
      <img
        src="/tijjanIcon2.png"
        alt="logo"
        className="w-30 h-25 animate-pulse scale-100"
      />
      <p className="text-white mt-4 text-sm font-secondary">Loading...</p>
    </div>
  );
}

export default Loader;
