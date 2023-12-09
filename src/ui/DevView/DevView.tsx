interface DevViewProps {
  data: unknown;
}
export function DevView({ data }: DevViewProps) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
