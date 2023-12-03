const ComingSoon = () => {
  return (
    <div className="w-full flex flex-col text-center justify-center items-center py-6">
      <video autoPlay loop muted playsInline width="230">
        <source src="animated-images/typing-cat.webm" type="video/webm" />
        <source src="animated-images/typing-cat.mp4" type="video/mp4" />
      </video>
      <p className="text-gray-800 opacity-60 mt-4">
        {'"'}I{"'"}m still workin on it. Be right back{'"'}
      </p>
    </div>
  );
};

export default ComingSoon;
