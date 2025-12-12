// src/components/LoginPage.tsx
import { useState } from "react";
import { Box, Paper, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { LogoHeader } from "./Logoheader";
import { LabeledTextInput } from "./TextInput";
import { LabeledPasswordInput } from "./PasswordInput";
import { PrimaryButton } from "./PrimaryButton";
import { ForgotPasswordLink } from "./ForgetPasswordLink";
import { VersionText } from "./VersionText";
import { FooterBrand } from "./FooterBrand";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const FIXED_EMAIL = "admin@example.com";
  const FIXED_PASSWORD = "mypassword123";

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    if (email === FIXED_EMAIL && password === FIXED_PASSWORD) {
      navigate("/dashboard");
      return;
    }

    alert("Invalid email or password.");
  };

  return (
    <Box style={{ width: "100%", maxWidth: 420 }}>
      <Paper
        withBorder
        shadow="md"
        radius="lg"
        p="xl"
        style={{ width: "100%", background: "#ffffff" }}
      >
        <LogoHeader />

        <Stack gap="md">
          <LabeledTextInput
            label="Email Address"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={setEmail} // 👈 string lang ang papasok dito
          />

          <LabeledPasswordInput
            label="Password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
          />
        </Stack>

        <ForgotPasswordLink />

        <PrimaryButton type="button" onClick={handleLogin}>
          Log in
        </PrimaryButton>

        <VersionText version="v0.1.0" />
      </Paper>

      <FooterBrand />
    </Box>
  );
}
