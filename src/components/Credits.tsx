const Credits = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/theflauxmedia/whtlg.png" 
                alt="TheFlauxMedia Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-gray-300">
                Website developed and handled by{" "}
                <a 
                  href="https://TheFlauxMedia.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline hover:text-gray-200 transition-colors"
                >
                  TheFlauxMedia
                </a>
              </p>
            </div>
          </div>
          
          <div className="text-xs text-gray-400">
            <p>© 2026 TheFlauxMedia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits; 