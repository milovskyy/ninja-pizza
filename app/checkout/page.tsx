import { CheckoutForm } from "@/components/CheckoutForm"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import Navigation from "@/components/Navigation"

export default function Checkout() {
  return (
    <Container className="">
      <Navigation categoryName="Checkout" />

      <div className="flex flex-col items-center px-3 pb-2">
        <h1 className="mb-6 self-start text-5xl font-extrabold">Checkout</h1>
        <CheckoutForm />
      </div>
      {/* <Dialog defaultOpen>
        <DialogContent className="flex w-full flex-col items-center justify-center rounded-none px-12 py-10 outline-none">
          <DialogHeader className="mb-5 gap-3">
            <div className="flex items-center justify-center">
              <Image
                src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/iconsPaint/icon-deliveryMap.svg"
                alt="map"
                width={320}
                height={170}
              />
            </div>
            <DialogTitle className="text-center text-4xl font-bold">
              Delivery zone
            </DialogTitle>
            <DialogDescription className="text-center text-base tracking-wide text-stone-400">
              Please make sure your address is covered by our delivery zone.
              Ninja-couriers aren&apos;t ready to deliver hot pizza throughout
              the whole Odessa
            </DialogDescription>
          </DialogHeader>
          <DialogTrigger className="w-full rounded-full bg-primary p-3 text-[16px] font-black hover:bg-main">
            Ok
          </DialogTrigger>
        </DialogContent>
      </Dialog> */}
      <AppFooter />
    </Container>
  )
}
