import { Error } from "@/components/404"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import Navigation from "@/components/Navigation"

export default function NotFound() {
  return (
    <Container>
      <Navigation categoryName="Error" />
      <Error />

      <AppFooter />
    </Container>
  )
}
