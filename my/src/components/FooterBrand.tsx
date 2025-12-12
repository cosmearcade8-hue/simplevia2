// src/components/FooterBrand.tsx
import { Center } from "@mantine/core";
import logingFooter from "../assets/powered-by.png";

export function FooterBrand() {
  return (
    <Center mt="sm">
      <img
        src={logingFooter}
        alt="Schüler Track Logo"
        style={{
          width: 140,
          height: "auto",
          objectFit: "contain",
          opacity: 0.9,
        }}
      />
    </Center>
  );
}
