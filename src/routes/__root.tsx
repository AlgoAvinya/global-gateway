import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingContact } from "@/components/site/FloatingContact";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform">
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AR Overseas Consultancy (OPC) Pvt. Ltd. — Where Great Things Happen" },
      { name: "description", content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study & work abroad in Germany, UK, USA, Canada, Australia." },
      { property: "og:title", content: "AR Overseas Consultancy (OPC) Pvt. Ltd. — Where Great Things Happen" },
      { name: "twitter:title", content: "AR Overseas Consultancy (OPC) Pvt. Ltd. — Where Great Things Happen" },
      { property: "og:description", content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study & work abroad in Germany, UK, USA, Canada, Australia." },
      { name: "twitter:description", content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study & work abroad in Germany, UK, USA, Canada, Australia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ee03e11f-782b-49ce-8b5e-e77c66281623/id-preview-a8e87fa0--bbd83067-1f1c-4539-b48c-0629be638abc.lovable.app-1778399519770.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ee03e11f-782b-49ce-8b5e-e77c66281623/id-preview-a8e87fa0--bbd83067-1f1c-4539-b48c-0629be638abc.lovable.app-1778399519770.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden pt-[106px] md:pt-[138px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
