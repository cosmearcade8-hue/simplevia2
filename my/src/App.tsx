import "./App.css";
import "@mantine/core/styles.css";

import loginLogo from "./assets/login-logo.png";
import logingFooter from "./assets/powered-by.png";

import { useState } from "react";
import {
  Box,
  Paper,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Group,
  Center,
} from "@mantine/core";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Box style={{ width: "100%", maxWidth: 420 }}>
        <Paper
          withBorder
          shadow="md"
          radius="lg"
          p="xl"
          style={{ width: "100%", background: "#ffffff" }}
        >
          <Center mb="md" style={{ flexDirection: "column" }}>
            <img
              src={loginLogo}
              alt="SPCF Logo"
              style={{
                width: 360,
                height: 90,
                objectFit: "contain",
              }}
            />
            <div style={{ height: 15 }} />

            <Text fz="sm" fw={700} c="blue" mt={4}>
              System Plus College Foundation
            </Text>
          </Center>

          <Stack gap="md">
            <div>
              <Text fz="xs" fw={600} mb={4} style={{ textAlign: "left" }}>
                Email Address <Text span c="red">*</Text>
              </Text>

              <TextInput
                placeholder="Enter your email address"
                radius="sm"
                size="sm"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>

            <div>
              <Text fz="xs" fw={600} mb={4} style={{ textAlign: "left" }}>
                Password <Text span c="red">*</Text>
              </Text>

              <PasswordInput
                placeholder="Enter your password"
                radius="sm"
                size="sm"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
          </Stack>

          <Group justify="flex-end" mt="xs" mb="md">
            <Text
              component="a"
              href="#"
              fz="xs"
              className="forgot-password-link"
              style={{ textDecoration: "none" }}
            >
              Forgot Password?
            </Text>
          </Group>

          <Button
            fullWidth
            radius="sm"
            size="sm"
            color="blue"
            style={{ fontWeight: 600 }}
          >
            Log in
          </Button>

          <Text ta="center" fz="xs" c="dimmed" mt="sm">
            v0.1.0
          </Text>
        </Paper>

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
      </Box>
    </main>
  );
}

export default App;
