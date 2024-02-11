export const TopNavBar = () => {
    return (
      <nav className="px-4 py-2 flex items-center justify-between">
        {/* Left margin */}
        <div className="ml-4"></div>
        {/* Logo, Title, Subtitle */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <div>
            <h1 className="text-lg font-semibold">BVN Verification</h1>
            <p className="text-sm">9th July 2023 | 8:34am</p>
          </div>
        </div>
        {/* Logout Link */}
        <a href="#" className="text-orange text-lg hover:underline mr-4">Logout</a>
      </nav>
    );
  };