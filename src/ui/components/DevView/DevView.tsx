interface DevViewProps {
  data: unknown;
  title: string;
}
export function DevView({ data, title }: DevViewProps) {
  if (data) {
    return (
      <div>
        <div>
          <strong>{title}</strong>
        </div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  return null;
}
