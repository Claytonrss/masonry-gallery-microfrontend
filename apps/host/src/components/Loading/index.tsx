const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative animate-spin rounded-full h-32 w-32 border-t-4 border-blue-400"></div>
    </div>
  );
};

export default Loading;
