import LocalizationHeader from "./LocalizationHeader"
import NavigationHeader from "./NavigationHeader"
import InfoHeader from "./InfoHeader"
import Logo from "../Logo"

const AppHeader = () => {
  return (
    <div className="fixed top-1 z-50 mx-1 flex h-14 w-full max-w-[1920px] flex-1 rounded-full px-1 md:h-16 lg:max-w-[1464px] xl:h-20">
      <div className="relative w-full rounded-full bg-white">
        <div className="mx-auto flex h-full w-full max-w-[1464px] flex-1 items-center justify-center px-4">
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
