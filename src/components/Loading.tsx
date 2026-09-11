const Loading = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

      <p className="text-sm font-medium text-gray-500">
        Loading technologies...
      </p>
    </div>
  );
};

export default Loading;