import LocalizationHeader from "./LocalizationHeader"
import NavigationHeader from "./NavigationHeader"
import InfoHeader from "./InfoHeader"
import Logo from "../Logo"

const AppHeader = () => {
  return (
    <div className="fixed top-1 z-50 flex h-[80px] w-full max-w-[1920px] flex-1 rounded-full bg-white">
      <div className="w-full rounded-full bg-white">
        <div className="mx-auto flex h-[80px] w-full max-w-[1464px] flex-1 px-3">
          <Logo />
          <LocalizationHeader />
          <NavigationHeader />
          <InfoHeader />
        </div>
      </div>
    </div>
  )
}

export default AppHeader

// 3.5 3 9 1 15.5
