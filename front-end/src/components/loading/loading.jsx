const Loading = () => {
  return (
    <div class="flex items-center justify-center space-x-2">
      <div class="w-10 h-14 bg-orange-500 rounded-full animate-bounce translate-y-5 "></div>
      <div class="w-10 h-14 bg-orange-400 rounded-full animate-bounce delay-150 translate-y-5"></div>
      <div class="w-10 h-14 bg-orange-500 rounded-full animate-bounce delay-300 translate-y-5 "></div>
    </div>
  );
};

export default Loading;
