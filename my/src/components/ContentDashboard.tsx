import {
  Container,
  SimpleGrid,
  Paper,
  Badge,
  Group,
  Text,
} from "@mantine/core";
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconFile,
} from "@tabler/icons-react";
import classes from "./StatsGrid.module.css";

const data = [
  { title: "Applications Received", icon: IconFile, value: "8192", diff: 16, color: "#2563eb" },
  { title: "Applications Processed", icon: IconFile, value: "6144", diff: 13, color: "#16a34a" },
  { title: "Applications Pending",   icon: IconFile, value: "2048", diff: 18, color: "#f59e0b" },
];

function StatsGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" w="100%" mt={10}>
      {data.map((stat) => {
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
        const diffColor = stat.diff > 0 ? "green" : "red";

        return (
          <Paper key={stat.title} withBorder radius="md" p="lg" className={classes.card}>
            <Text className={classes.value} c={stat.color}>
              {stat.value}
            </Text>

            <Group justify="space-between">
              <Text className={classes.label}>{stat.title}</Text>
              <stat.icon size={26} stroke={1.5} style={{ color: stat.color }} />
            </Group>

            <Badge
              variant="light"
              color={diffColor}
              leftSection={<DiffIcon size={16} />}
              radius="sm"
              size="lg"
            >
              {stat.diff}% THIS MONTH
            </Badge>
          </Paper>
        );
      })}
    </SimpleGrid>
  );
}

export function ContentDashboard() {
  return (
    <Container
      size={1900}     // ← adjust to 1140/1180 depende sa gusto mong lapad
      px="md"
      pt={88}         // space under fixed header (≈60px) + buffer
      pb="xl"         // space above fixed footer
    >
      <Paper withBorder radius="sm" p="xs" mb="md">
        <Text fw={700} size="sm">Dashboard</Text>
      </Paper>

      <StatsGrid />
    </Container>
  );
}
