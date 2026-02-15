import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Security() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Security & Privacy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Designed with privacy-by-design, secure admin, and clear data boundaries.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Admin Security</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>Hashed passwords with Argon2</li>
                  <li>Signed JWT with short TTL</li>
                  <li>Rate limited admin endpoints</li>
                  <li>Action logging for changes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Data Handling</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>SQLite-backed storage with migrations</li>
                  <li>No secrets exposed client-side</li>
                  <li>Cacheable public endpoints with ETag</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border md:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Architecture Separation</h3>
                <p className="text-muted-foreground text-sm">
                  YOLO handles detection; Gemini handles reasoning. Strict separation maintained via a demo iframe boundary.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
