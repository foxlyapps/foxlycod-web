import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="pt-44 pb-32 text-center">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-8xl font-bold tracking-tight text-gradient">404</p>
        <h1 className="text-3xl font-bold">This page went RTO.</h1>
        <p className="max-w-md text-muted">It never arrived. Let&apos;s get you back to something that converts.</p>
        <Button href="/" arrow>Back home</Button>
      </Container>
    </section>
  );
}
