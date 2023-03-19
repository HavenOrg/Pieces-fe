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
} from "solid-start";
import "./root.css"


export default function Root() {

  return (
    <Html>
      <Head>
        <Title>Pieces</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Find your gem" />
        <Link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {/* Place NAVVBARR */}
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        {/* This one line "scripts" voided my styling when deleted*/}
        <Scripts />
      </Body>
    </Html>
  );
};

