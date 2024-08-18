"use client";

import sanitize from "sanitize-html";
import { ReactNode, useRef, useState } from "react";
import * as css from "@/app/_component/componentLayout.css";
import { MobileNavbar, Navbar } from ".";
import { usePathname } from "next/navigation";
import { vars } from "../styles/theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayoutProvider({
  children,
  title,
  description,
}: IProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            gcTime: 1000 * 60 * 5,
            refetchOnWindowFocus: true,
          },
        },
      })
  );

  const mainRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  return (
    <QueryClientProvider client={queryClient}>
      <div
        ref={mainRef}
        style={{ backgroundColor: vars.themeColor.backgroundColor.color }}
      >
        <Navbar target={mainRef} />
        <div
          id="mainLayoutProvider"
          // className={
          //   pathname === "/" ? css.mainPageLayoutWrapper : css.pageLayoutWrapper
          // }
          className={css.pageLayoutWrapper}
        >
          {title && <div className={css.titleSection}>{title}</div>}
          {description && (
            <div
              className={css.descriptionSection}
              dangerouslySetInnerHTML={{
                __html: sanitize(description),
              }}
            />
          )}
          {children}
        </div>
        <MobileNavbar />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
