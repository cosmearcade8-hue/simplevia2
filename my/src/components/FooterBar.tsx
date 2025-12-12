// src/components/FooterBar.tsx
import { Box, Group, Anchor, Text, Image } from "@mantine/core";

export function FooterBar() {
  return (
    <Box
      component="footer"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        paddingInline: 16,
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        zIndex: 90,
      }}
    >
      {/* main flex row */}
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 8,
        }}
      >
        {/* LEFT LINKS */}
        <Group gap="xs" wrap="wrap" style={{ flex: "1 1 auto", minWidth: 0 }}>
          <Anchor size="xs" c="dimmed" href="#">Terms of Service</Anchor>
          <Text size="xs" c="gray.5">|</Text>
          <Anchor size="xs" c="dimmed" href="#">Privacy Statement</Anchor>
          <Text size="xs" c="gray.5">|</Text>
          <Anchor size="xs" c="dimmed" href="mailto:info@spcf.edu.ph">
            info@spcf.edu.ph
          </Anchor>
        </Group>

        {/* RIGHT: ONE CLUSTER (Powered by + logo) */}
        <Box
          style={{
            marginLeft: "auto",          // push to the far right
            display: "inline-flex",
            alignItems: "center",
            gap: 6,                      // maliit na pagitan lang
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <Text size="xs" c="dimmed">Powered by</Text>
          <Image
            src="/src/assets/footer-logo.png"  // iyong logo
            alt="Scholar Track"
            h={18}
            w="auto"
            fit="contain"
          />
        </Box>
      </Box>
    </Box>
  );
}
