import InfoHeaderCart from "./InfoHeaderCart"
import InfoHeaderLike from "./InfoHeaderLike"
import InfoHeaderNumber from "./InfoHeaderNumber"
import InfoHeaderUser from "./InfoHeaderUser"

function InfoHeader() {
  return (
    <div className="flex flex-1 justify-end">
      <div className="ml-20 flex items-center justify-center gap-4">
        <InfoHeaderNumber />
        <InfoHeaderLike />
        <InfoHeaderUser />
        <InfoHeaderCart />
      </div>
    </div>
  )
}

export default InfoHeader
