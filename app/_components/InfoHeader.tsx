import InfoHeaderCart from "./InfoHeaderCart";
import InfoHeaderLike from "./InfoHeaderLike";
import InfoHeaderNumber from "./InfoHeaderNumber";
import InfoHeaderUser from "./InfoHeaderUser";

function InfoHeader() {
  return (
    <div className="flex flex-1 justify-end">
      <div className="ml-20 flex items-center justify-center gap-4">
        <div className="flex h-[56px] items-center justify-center">
          <InfoHeaderNumber />
        </div>
        <div className="flex h-[56px] w-[56px] items-center justify-center">
          <InfoHeaderLike />
        </div>
        <div className="flex h-[56px] w-[56px] items-center justify-center">
          <InfoHeaderUser />
        </div>
        <div className="flex h-[56px] w-[56px] items-center justify-center">
          <InfoHeaderCart />
        </div>
      </div>
    </div>
  );
}

export default InfoHeader;
