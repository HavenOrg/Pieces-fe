import { Router } from "@solidjs/router";
import { Suspense, lazy } from "solid-js";
import {
  Html,
  Head,
  Title,
  Meta,
  Link,
  Body,
  Routes,
  FileRoutes,
  Scripts,
  ErrorBoundary,
  Route
} from "solid-start";
import Navbar from "./components/Navbar";
import "./root.css";

import NotFound from "./routes/[...404]"; 

export default function Root() {
  
  return (
    <Html>
      <Head>
        <Title>Pieces</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Find your gem" />
        <Link rel="manifest" href="/manifest.webmanifest" />
        <Link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface"
          rel="stylesheet"
        />
      </Head>
      <Body class="overflow-y-hidden">
        <Suspense>
          <ErrorBoundary>
            {/* Place NAVVBARR */}
            
            <Navbar />
            <Router>
              <Routes>
                <FileRoutes />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </ErrorBoundary>
        </Suspense>
        {/* This one line "scripts" voided my styling when deleted*/}
        <Scripts />
      </Body>
    </Html>
  );
}
